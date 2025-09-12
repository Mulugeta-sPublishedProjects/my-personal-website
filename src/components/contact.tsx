"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// TypeScript interfaces for better type safety
interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  href: string | null;
  color: string;
}

interface SocialProfile {
  icon: React.ReactNode;
  name: string;
  url: string;
  color: string;
}

export default function ContactPage() {
  const contactInfo: ContactMethod[] = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      description: "Drop me a line anytime",
      value: "mulugeta.adamu97@gmail.com",
      href: "mailto:mulugeta.adamu97@gmail.com",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      description: "Available by appointment",
      value: "+251 98 305 4774",
      href: "tel:+251983054774",
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      description: "Based in",
      value: "Addis Ababa, Ethiopia",
      href: null,
      color: "bg-red-500/10 text-red-500",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Telegram",
      description: "Quick chat",
      value: "@mulugeta_dev",
      href: "https://t.me/mulugeta_dev",
      color: "bg-purple-500/10 text-purple-500",
    },
  ];

  const socialProfiles: SocialProfile[] = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/mulugeta-adamu",
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/mulugeta-adamu",
      color: "hover:bg-blue-700 hover:text-white",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "https://twitter.com/mulugeta_adamu",
      color: "hover:bg-sky-500 hover:text-white",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Reusable Contact Method Component
  const ContactMethodItem = ({
    method,
    index,
  }: {
    method: ContactMethod;
    index: number;
  }) => (
    <motion.div
      variants={itemVariants}
      className={cn(
        "group relative",
        index % 2 === 0 ? "md:border-r border-border" : ""
      )}
    >
      {method.href ? (
        <a
          href={method.href}
          target={method.href.startsWith("http") ? "_blank" : undefined}
          rel={
            method.href.startsWith("http") ? "noopener noreferrer" : undefined
          }
          className="flex items-center gap-4 p-6 hover:bg-muted/30 transition-all duration-300 group"
          aria-label={`Contact via ${method.title}: ${method.value}`}
        >
          <motion.div
            className={cn("p-3 rounded-lg transition-colors", method.color)}
            whileHover={{ scale: 1.1, rotate: 5 }}
            aria-hidden="true"
          >
            {method.icon}
          </motion.div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {method.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {method.description}
            </p>
            <p className="text-sm font-mono text-primary mt-1">
              {method.value}
            </p>
          </div>
          <ArrowRight
            className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
            aria-hidden="true"
          />
        </a>
      ) : (
        <div className="flex items-center gap-4 p-6">
          <div
            className={cn("p-3 rounded-lg", method.color)}
            aria-hidden="true"
          >
            {method.icon}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{method.title}</h3>
            <p className="text-sm text-muted-foreground">
              {method.description}
            </p>
            <p className="text-sm font-mono text-muted-foreground mt-1">
              {method.value}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <Badge
            className="mb-4 px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15"
            aria-label="Section label"
          >
            Get In Touch
          </Badge>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Have a project in mind? Reach out
            through any of these channels.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border border-border/50 shadow-xl overflow-hidden bg-card/80 backdrop-blur-sm">
            <CardContent className="p-0">
              {/* Contact Methods */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 gap-1"
              >
                {contactInfo.map((method, index) => (
                  <ContactMethodItem
                    key={method.title}
                    method={method}
                    index={index}
                  />
                ))}
              </motion.div>

              {/* Divider */}
              <div
                className="border-t border-border mx-6"
                aria-hidden="true"
              ></div>

              {/* Social Links & CTA */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Social Links */}
                  <div className="flex-1">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Sparkles
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                      Connect With Me
                    </h3>
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {socialProfiles.map((social) => (
                        <motion.div key={social.name} variants={itemVariants}>
                          <Button
                            variant="outline"
                            asChild
                            size="sm"
                            className={cn(
                              "rounded-full gap-2 transition-all",
                              social.color
                            )}
                            aria-label={`Follow me on ${social.name}`}
                          >
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {social.icon}
                              <span>{social.name}</span>
                            </a>
                          </Button>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="flex-1 flex flex-col justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl p-5 text-center border border-primary/20">
                      <h3 className="font-semibold mb-2 text-foreground">
                        Ready to Start?
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Let's discuss your project and see how we can work
                        together.
                      </p>
                      <Button
                        size="sm"
                        asChild
                        className="w-full rounded-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all shadow-md hover:shadow-lg group"
                        aria-label="Message me on Telegram"
                      >
                        <a
                          href="https://t.me/mulugeta_dev"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <MessageCircle
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                          Message me on Telegram
                          <ArrowRight
                            className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                            aria-hidden="true"
                          />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2"
        >
          <span
            className="h-2 w-2 rounded-full bg-green-500 animate-pulse"
            aria-hidden="true"
          ></span>
          I typically respond within 24 hours. Looking forward to hearing from
          you!
        </motion.div>
      </div>
    </section>
  );
}
