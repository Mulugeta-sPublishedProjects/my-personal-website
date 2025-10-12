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
import { toast } from "sonner";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/muleA",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mulugeta-adamu/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/mulugeta6omkf",
  },
  {
    name: "Telegram",
    icon: MessageCircle,
    href: "https://t.me/mulugeta_adamu",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mulugeta.adamu97@gmail.com");
    setCopied(true);
    toast.success("Email copied!", {
      description: "Email address copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-muted/30"
      ref={ref}
      aria-labelledby="contact-heading"
    >
      <div className="container px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="max-w-4xl mx-auto w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold mb-4 text-responsive-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1,
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-center max-w-2xl mx-auto text-responsive-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              Feel free to reach out through any of the channels below. I'm
              always open to discussing new opportunities, interesting projects,
              and potential collaborations.
            </motion.p>
          </div>

          {/* Contact Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto w-full"
            role="list"
          >
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              role="listitem"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold text-responsive-xl">
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-responsive-base">
                      mulugeta.adamu97@gmail.com
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyEmail}
                      className="h-8 w-8 p-0 touch-manipulation"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <Check
                          className="h-4 w-4 text-primary"
                          aria-hidden="true"
                        />
                      ) : (
                        <Copy className="h-4 w-4" aria-hidden="true" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.4,
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              role="listitem"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold text-responsive-xl">
                    <Phone
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-responsive-base">
                      +251 983 05 47 74
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              role="listitem"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold text-responsive-xl">
                    <MapPin
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-responsive-base">
                      5 Killo, Addis Ababa, Ethiopia
                    </p>
                    <p className="text-xs text-muted-foreground text-responsive-sm">
                      Available for remote work worldwide
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.6,
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              role="listitem"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold text-responsive-xl">
                    <MessageCircle
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                    Social Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-3">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="sm"
                        className="h-10 rounded-lg transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground touch-manipulation text-responsive-sm"
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit my ${social.name} profile`}
                        >
                          <social.icon className="h-4 w-4" aria-hidden="true" />
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
