export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  language_code?: string;
}

export interface TelegramWebApp {
  ready: () => void;
  close: () => void;
  initDataUnsafe: {
    user?: TelegramUser;
  };
}

declare global {
  interface GlobalThis {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}
