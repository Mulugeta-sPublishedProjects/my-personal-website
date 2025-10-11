"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
  Send,
  MapPin,
  MessageCircle,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/mulugetaadamu",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/mulugetaadamu",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/mulugetaadamu",
    color: "hover:text-[#1da1f2]",
  },
  {
    name: "Telegram",
    icon: MessageCircle,
    href: "https://t.me/mulugetaadamu",
    color: "hover:text-[#0088cc]",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mulugeta.adamu@example.com");
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/30" ref={ref}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I&apos;d love to hear from you. Let&apos;s connect and explore how
            we can bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
                <CardDescription>Send me an email directly</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full justify-between bg-transparent"
                  onClick={copyEmail}
                >
                  <span className="text-sm">mulugeta.adamu@example.com</span>
                  {copied ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
                <Button className="w-full mt-3" asChild>
                  <a href="mailto:mulugeta.adamu@example.com">
                    <Send className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
                <CardDescription>Where I&apos;m based</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">
                    Addis Ababa, Ethiopia &#127466;&#127469;
                  </p>
                  <p className="text-muted-foreground">
                    Available for remote opportunities worldwide
                  </p>
                  <p className="text-muted-foreground">
                    Open to relocation for the right opportunity
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Connect on Social Media</CardTitle>
              <CardDescription>Follow me on social platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    className={`h-auto flex-col gap-2 py-4 ${social.color} transition-all hover:scale-105`}
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-6 w-6" />
                      <span className="text-sm">{social.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border">
        <div className="container px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mulugeta Adamu. Built with
            Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </section>
  );
}
function useToast(): { toast: any } {
  throw new Error("Function not implemented.");
}
