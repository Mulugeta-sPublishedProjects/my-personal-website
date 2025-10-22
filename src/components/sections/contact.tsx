"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TelegramIcon } from "@/components/ui/telegram-icon";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/muleA" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mulugeta-adamu/",
  },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/mulugeta6omkf" },
  {
    name: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/mulugeta_dev",
  },
];

export function Contact() {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mulugeta.adamu97@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-muted/20"
      ref={ref}
      aria-labelledby="contact-heading"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            >
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Have a project in mind? I'm always open to new opportunities and
              collaborations.
            </p>
          </div>

          {/* Contact Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto"
            role="list"
            aria-label="Contact information"
          >
            {/* Email */}
            <div role="listitem">
              <Card className="hover:shadow-md transition focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-sm break-all text-center sm:text-left">
                    mulugeta.adamu97@gmail.com
                  </span>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 flex-shrink-0"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* Phone */}
            <div role="listitem">
              <Card className="hover:shadow-md transition focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-sm">+251 983 05 47 74</span>
                </CardContent>
              </Card>
            </div>

            {/* Location */}
            <div role="listitem">
              <Card className="hover:shadow-md transition focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center sm:text-left">
                    Addis Ababa, Ethiopia
                  </p>
                  <p className="text-xs text-muted-foreground text-center sm:text-left mt-1">
                    Available for remote work
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div role="listitem">
              <Card className="hover:shadow-md transition focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Social Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="grid grid-cols-4 gap-2"
                    role="list"
                    aria-label="Social media profiles"
                  >
                    {socialLinks.map(({ name, icon: Icon, href }) => (
                      <div key={name} role="listitem">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-9 rounded focus:ring-2 focus:ring-primary flex items-center justify-center"
                          asChild
                        >
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit my ${name} profile`}
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
