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
import { motion, easeOut } from "framer-motion";
import { TelegramIcon } from "@/components/ui/telegram-icon";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/muleA" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mulugeta-adamu/",
  },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/mulugeta6omkf" },
  { name: "Telegram", icon: TelegramIcon, href: "https://t.me/mulugeta_dev" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mulugeta.adamu97@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard", {
      position: "top-center",
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/10"
      ref={ref}
      aria-labelledby="contact-heading"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            >
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed">
              Have a project in mind? I'm open to new opportunities and
              collaborations.
            </p>
          </div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto"
            role="list"
            aria-label="Contact information"
          >
            {/* Email */}
            <motion.div variants={cardVariants} role="listitem">
              <Card className="h-full border-none bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3 px-5 pt-5">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl text-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 pb-5">
                  <span className="text-sm md:text-base text-foreground break-all text-center sm:text-left">
                    mulugeta.adamu97@gmail.com
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={copyEmail}
                    className="h-9 w-9 border-primary/20 hover:bg-primary/10"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Phone */}
            <motion.div variants={cardVariants} role="listitem">
              <Card className="h-full border-none bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3 px-5 pt-5">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl text-foreground">
                    <Phone className="h-5 w-5 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <span className="text-sm md:text-base text-foreground">
                    +251 983 05 47 74
                  </span>
                </CardContent>
              </Card>
            </motion.div>

            {/* Location */}
            <motion.div variants={cardVariants} role="listitem">
              <Card className="h-full border-none bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3 px-5 pt-5">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl text-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <p className="text-sm md:text-base text-foreground text-center sm:text-left">
                    Addis Ababa, Ethiopia
                  </p>
                  <p className="text-xs md:text-sm text-foreground text-center sm:text-left mt-1.5">
                    Available for remote work
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={cardVariants} role="listitem">
              <Card className="h-full border-none bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3 px-5 pt-5">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl text-foreground">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Social Media
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <div
                    className="grid grid-cols-4 gap-4 sm:gap-5"
                    role="list"
                    aria-label="Social media profiles"
                  >
                    {socialLinks.map(({ name, icon: Icon, href }) => (
                      <div key={name} role="listitem">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-14 w-14 border-primary/20 hover:bg-primary/10 touch-manipulation"
                          asChild
                        >
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit my ${name} profile`}
                          >
                            <Icon className="h-5 w-5 text-foreground" />
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
