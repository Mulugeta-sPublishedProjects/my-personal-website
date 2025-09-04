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
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      description: "Drop me a line anytime",
      value: "mulugeta.adamu97@gmail.com",
      href: "mailto:mulugeta.adamu97@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      description: "Available by appointment",
      value: "0983054774",
      href: "tel:+251983054774",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      description: "Based in",
      value: "Addis Ababa, Ethiopia",
      href: null,
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Telegram",
      description: "Quick chat",
      value: "@mulugeta_dev",
      href: "https://t.me/mulugeta_dev",
    },
  ];

  const socialProfiles = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/yourusername",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-background to-muted/20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Contact</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Have a project in mind? Reach out
            through any of these channels.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <Card className="border-0 shadow-lg overflow-hidden">
          <CardContent className="p-0">
            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-1">
              {contactInfo.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={index % 2 === 0 ? "border-r border-border" : ""}
                >
                  {method.href ? (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-6 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{method.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                        <p className="text-sm font-mono text-primary">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-6">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{method.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                        <p className="text-sm font-mono text-muted-foreground">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-border mx-6"></div>

            {/* Social Links & CTA */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Social Links */}
                <div className="flex-1">
                  <h3 className="font-medium mb-4">Connect With Me</h3>
                  <div className="flex flex-wrap gap-2">
                    {socialProfiles.map((social, index) => (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Button variant="outline" asChild size="sm">
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            {social.icon}
                            <span>{social.name}</span>
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg p-4 text-center">
                    <h3 className="font-semibold mb-2">Ready to Start?</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Let's discuss your project and see how we can work
                      together.
                    </p>
                    <Button size="sm" asChild className="w-full">
                      <a
                        href="https://t.me/mulugeta_dev"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Message me on Telegram
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm text-muted-foreground"
        >
          I typically respond within 24 hours. Looking forward to hearing from
          you!
        </motion.div>
      </div>
    </section>
  );
}
