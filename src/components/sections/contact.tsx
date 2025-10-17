"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mulugeta.adamu97@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.5, ease: "easeOut" as const },
  });

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-muted/20"
      ref={ref}
      aria-labelledby="contact-heading"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-4xl mx-auto" {...fadeIn(0)}>
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold mb-4"
              {...fadeIn(0.1)}
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              {...fadeIn(0.2)}
            >
              Have a project in mind? I'm always open to new opportunities and
              collaborations.
            </motion.p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email */}
            <motion.div {...fadeIn(0.3)}>
              <Card className="hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <span className="text-sm">mulugeta.adamu97@gmail.com</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyEmail}
                    className="h-8 w-8 p-0"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Phone */}
            <motion.div {...fadeIn(0.4)}>
              <Card className="hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-sm">+251 983 05 47 74</span>
                </CardContent>
              </Card>
            </motion.div>

            {/* Location */}
            <motion.div {...fadeIn(0.5)}>
              <Card className="hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Addis Ababa, Ethiopia</p>
                  <p className="text-xs text-muted-foreground">
                    Available for remote work
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media */}
            <motion.div {...fadeIn(0.6)}>
              <Card className="hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Social Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-2">
                    {socialLinks.map(({ name, icon: Icon, href }) => (
                      <Button
                        key={name}
                        variant="outline"
                        size="sm"
                        className="h-9 rounded"
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
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
