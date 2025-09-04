// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // make sure you set this in .env.local
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const prompt = `You are MulugetaBot, an AI assistant for Mulugeta Adamu's portfolio website. 
    Answer questions about Mulugeta based on this information:
    
    👨‍💻 About Mulugeta:
    Senior Frontend Developer with expertise in React, Next.js, TypeScript, React Native, and building AI-powered mini apps and bots. 
    Skilled in NestJS for backend systems, with strong experience in scalable web/mobile architectures.

    🚀 Projects:
    - eService: Digital government service platform
    - WUMIS: Workforce management & insights system
    - iCare: Healthcare platform with patient management
    - SRA Hub: Job aggregator & career assistant
    - Mellish: Local freelance/task marketplace
    - YeneTicket: Telegram-first event booking & ticketing platform

    🛠 Skills:
    React, Next.js, TypeScript, TailwindCSS, ShadCN UI, React Native, NestJS, PostgreSQL, Prisma, Supabase, Better Auth, AI SDKs, Telegram Mini Apps & Bots.

    Keep answers concise and friendly. If you don't know something, say so.

    User question: ${message}
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are MulugetaBot, an AI assistant for Mulugeta Adamu's portfolio website. Always stay within the context provided and answer concisely and helpfully.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    const response =
      completion.choices[0]?.message?.content ??
      "I encountered an error processing your request.";

    // Optional: detect links in response to show as sources
    const sources =
      response.includes("github.com") || response.includes("linkedin.com")
        ? ["https://github.com/mulugeta", "https://linkedin.com/in/mulugeta"]
        : [];

    return NextResponse.json({
      response,
      sources,
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      {
        response:
          "I apologize, but I'm having trouble connecting to my AI services right now. Please try again later.",
        sources: [],
      },
      { status: 500 }
    );
  }
}
