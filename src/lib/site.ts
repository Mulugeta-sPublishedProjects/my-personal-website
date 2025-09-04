export type SiteSocial = {
  github?: string;
  linkedin?: string;
  twitter?: string;
  calendly?: string;
};

export type SiteConfig = {
  email: string;
  telegramUsername: string;
  social?: SiteSocial;
};

export const site: SiteConfig = {
  email: "hello@mulugetaadamu.dev",
  telegramUsername: "mulugetadev",
  social: {
    github: "https://github.com/mulugetaadamu",
    linkedin: "https://linkedin.com/in/mulugetaadamu",
    twitter: "https://x.com/mulugetaadamu",
    calendly: "https://calendly.com/mulugetaadamu/30min-discovery-call",
  },
};
