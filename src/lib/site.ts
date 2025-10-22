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
  telegramUsername: "mulugeta_dev",
  social: {
    github: "https://github.com/muleA",
    linkedin: "https://www.linkedin.com/in/mulugeta-adamu/",
    twitter: "https://twitter.com/mulugeta6omkf",
  },
};
