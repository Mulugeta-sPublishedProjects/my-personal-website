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
  Send,
  Clock,
  Star,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/components/performance-optimizer";

interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  href?: string;
  color: string;
}

interface SocialProfile {
  icon: React.ReactNode;
  name: string;
  url: string;
  color: string;
}

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion();

  const contactMethods: ContactMethod[] = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      description: "Professional inquiries & collaborations",
      value: "mulugeta.adamu97@gmail.com",
      href: "mailto:mulugeta.adamu97@gmail.com",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      description: "Available Mon-Fri, 9AM-6PM EAT",
      value: "+251 98 305 4774",
      href: "tel:+251983054774",
      color: "bg-green-500/10 text-green-500 border-green-500/20",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      description: "Open to remote & on-site work",
      value: "Addis Ababa, Ethiopia",
      color: "bg-red-500/10 text-red-500 border-red-500/20",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Telegram",
      description: "Fastest response time",
      value: "@mulugeta_dev",
      href: "https://t.me/mulugeta_dev",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const ContactItem = ({ method }: { method: ContactMethod }) => (
    <motion.div
      variants={itemVariants}
      className="group flex items-center gap-6 p-6 glass-subtle rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-glow transition"
    >
      <motion.div
        className={cn("p-4 rounded-2xl border", method.color)}
        whileHover={{ scale: 1.1, rotate: 10 }}
      >
        {method.icon}
      </motion.div>
      <div>
        <h3 className="text-lg font-bold">{method.title}</h3>
        <p className="text-sm text-muted-foreground">{method.description}</p>
        <p className="text-primary font-semibold">{method.value}</p>
      </div>
      {method.href && (
        <a
          href={method.href}
          target={method.href.startsWith("http") ? "_blank" : undefined}
          rel={
            method.href.startsWith("http") ? "noopener noreferrer" : undefined
          }
          className="ml-auto"
          aria-label={`Contact via ${method.title}`}
        >
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition" />
        </a>
      )}
    </motion.div>
  );

  return (
    <section className="py-20 bg-background relative z-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 text-primary font-semibold">
            <Sparkles className="h-4 w-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-2">
            Let's Build Something{" "}
            <span className="text-primary">Amazing Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into reality? I create
            high-performance web apps with exceptional UX.
          </p>
        </div>

        {/* Contact Methods */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-2 gap-4 mb-8"
        >
          {contactMethods.map((method) => (
            <ContactItem key={method.title} method={method} />
          ))}
        </motion.div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {socialProfiles.map((social) => (
            <Button
              key={social.name}
              asChild
              size="sm"
              className={cn("rounded-full gap-2", social.color)}
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.icon} <span>{social.name}</span>
              </a>
            </Button>
          ))}
        </div>

        {/* CTA */}
        <Card className="glass-subtle rounded-2xl p-6 text-center border border-border/20">
          <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" /> Ready to Start?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Let's discuss your project and turn your vision into reality. Free
            consultation available!
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button
              asChild
              className="w-full rounded-full bg-primary text-white"
            >
              <a
                href="https://t.me/mulugeta_dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Quick Chat on Telegram
              </a>
            </Button>
            <Button variant="outline" asChild className="w-full rounded-full">
              <a href="mailto:mulugeta.adamu97@gmail.com">Send Email</a>
            </Button>
          </div>
          <div className="flex justify-center gap-6 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> 24h response
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3" /> 5+ Years Experience
            </span>
            <span className="flex items-center gap-1">
              <Zap className="h-3 w-3" /> Fast Delivery
            </span>
          </div>
        </Card>
      </div>
    </section>
  );
}
