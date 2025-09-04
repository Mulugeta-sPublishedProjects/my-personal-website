// components/Chatbot.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  sources?: string[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm MulugetaBot 🤖. I can tell you about Mulugeta's skills, projects, and experience. I'm powered by AI, so feel free to ask me anything!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [apiError, setApiError] = useState(false);

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  const scrollToBottom = (force = false) => {
    if (messagesContainerRef.current) {
      const { scrollHeight, clientHeight, scrollTop } =
        messagesContainerRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;

      if (force || isNearBottom) {
        messagesEndRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const handleResize = () => scrollToBottom();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Call API
  const generateResponse = async (
    userMessage: string
  ): Promise<{ text: string; sources?: string[] }> => {
    try {
      setApiError(false);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      return {
        text: data.response,
        sources: data.sources || [],
      };
    } catch (error) {
      console.error("AI API Error:", error);
      setApiError(true);

      // Fallback mini knowledge base
      const knowledgeBase: Record<string, string> = {
        about: `Mulugeta Adamu is a Senior Frontend Developer with expertise in React, Next.js, TypeScript, React Native, and AI-powered apps.`,
        experience: `He has 5+ years of experience, working at Perago Systems PLC, Top Link Technology PLC, and Tria PLC.`,
        skills: `Core stack: React, Next.js, TypeScript, TailwindCSS, Node.js, NestJS, PostgreSQL, Prisma, React Native, AI SDKs.`,
        projects: `Notable projects: eService (gov services), WUMIS (workforce mgmt), iCare (healthcare), SRA Hub, Mellish, YeneTicket.`,
        contact: `You can reach him via email or connect on GitHub/LinkedIn.`,
        default: `I can tell you about Mulugeta's skills, projects, or experience. Try asking "What’s your tech stack?"`,
      };

      const lowerMessage = userMessage.toLowerCase();
      if (lowerMessage.includes("about")) return { text: knowledgeBase.about };
      if (lowerMessage.includes("experience") || lowerMessage.includes("work"))
        return { text: knowledgeBase.experience };
      if (lowerMessage.includes("skill") || lowerMessage.includes("stack"))
        return { text: knowledgeBase.skills };
      if (lowerMessage.includes("project"))
        return { text: knowledgeBase.projects };
      if (lowerMessage.includes("contact"))
        return { text: knowledgeBase.contact };
      return { text: knowledgeBase.default };
    }
  };

  // Send user message & fetch response
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setIsTyping(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 400)); // typing delay
      const { text, sources } = await generateResponse(userMessage.text);

      // Typing effect
      let currentText = "";
      for (const word of text.split(" ")) {
        currentText += word + " ";
        setMessages((prev) => [
          ...prev.filter((m) => m.id !== "temp"),
          {
            id: "temp",
            text: currentText,
            isUser: false,
            timestamp: new Date(),
          },
        ]);
        await new Promise((resolve) => setTimeout(resolve, 40));
      }

      // Final bot message
      setMessages((prev) => [
        ...prev.filter((m) => m.id !== "temp"),
        {
          id: (Date.now() + 1).toString(),
          text,
          isUser: false,
          timestamp: new Date(),
          sources,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "⚠️ I'm having trouble responding right now. Please try again later.",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Quick actions
  const quickActions = [
    { label: "About Me", query: "Tell me about yourself" },
    { label: "Skills", query: "What are your technical skills?" },
    { label: "Projects", query: "Show me your projects" },
    { label: "Experience", query: "What's your work experience?" },
  ];

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse hover:animate-none"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-12 right-0 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with AI
          </span>
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] shadow-2xl border-border/50 flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="relative">
                  <Bot className="w-5 h-5 text-primary" />
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-500" />
                </div>
                MulugetaBot 🤖
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  AI Powered
                </span>
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {messages.map((message: any) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3 animate-fade-in",
                    message.isUser ? "justify-end" : "justify-start"
                  )}
                >
                  {!message.isUser && (
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-3",
                      message.isUser
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-muted text-muted-foreground rounded-bl-none"
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap">
                      {message.text}
                    </p>
                    {message.sources?.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-border/50">
                        <p className="text-xs opacity-70 mb-1">Sources:</p>
                        <div className="flex flex-wrap gap-1">
                          {message.sources.map((source: any, index: any) => (
                            <a
                              key={index}
                              href={source}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors inline-flex items-center gap-1"
                            >
                              {new URL(source).hostname}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    <p className="text-xs opacity-50 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  {message.isUser && (
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <User className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {(isLoading || isTyping) && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div className="bg-muted text-muted-foreground rounded-2xl rounded-bl-none px-4 py-3 max-w-[80%]">
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce delay-200"></div>
                      </div>
                      <span className="text-sm">
                        {isTyping ? "Typing..." : "Thinking..."}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick actions */}
            {messages.length === 1 && (
              <div className="border-t p-4">
                <p className="text-xs text-muted-foreground mb-2">
                  Quick questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => {
                        setInputValue(action.query);
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, projects, or experience..."
                  className="flex-1 px-4 py-2 bg-muted border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  disabled={isLoading || isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading || isTyping}
                  size="icon"
                  className="rounded-full"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              {apiError && (
                <p className="text-xs text-red-500 mt-2 text-center">
                  ⚠️ AI service unavailable. Using fallback answers.
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-2 text-center">
                💡 Try asking about projects, skills, or work experience
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
