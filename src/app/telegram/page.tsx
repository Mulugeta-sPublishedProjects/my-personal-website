"use client";

import { useEffect, useState } from "react";

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  language_code?: string;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void;
        close: () => void;
        initDataUnsafe: {
          user?: TelegramUser;
        };
      };
    };
  }
}

export default function TelegramMiniApp() {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      // Initialize Telegram Web App
      tg.ready();

      // Fetch user information
      const userInfo = tg.initDataUnsafe?.user || null;
      setUser(userInfo);

      console.log("Telegram User Info:", userInfo);
    }
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to My Telegram Portfolio</h1>
      {user ? (
        <p>Hello, {user.first_name}!</p>
      ) : (
        <p>Loading user data...</p>
      )}
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#0088cc",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => window.Telegram?.WebApp?.close()}
      >
        Close App
      </button>
    </div>
  );
}
