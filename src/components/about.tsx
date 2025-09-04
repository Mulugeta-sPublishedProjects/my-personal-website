"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Palette, Zap, Users } from "lucide-react";

export function AboutUs() {
 
  const features = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "UI/UX Design",
      description: "Creating intuitive, accessible interfaces with great UX",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Performance",
      description: "Optimizing for fast, responsive web applications",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-background to-muted/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">About</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me, my skills, and what drives my passion for frontend
            development.
          </p>
        </div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <Image
                  src="/portifolio-website.webp"
                  alt="Mulugeta Adamu - Frontend Developer"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 -z-10 blur-xl"></div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium shadow-lg">
                3+ Years Experience
              </div>
            </div>
          </motion.div>

          {/* Right column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Frontend Developer & UI/UX Enthusiast
              </h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate frontend developer with expertise in creating
                modern, responsive web applications. With a strong foundation in
                JavaScript, React, and modern CSS frameworks, I transform ideas
                into engaging user experiences.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical excellence with creative
                problem-solving to deliver solutions that not only meet
                requirements but exceed user expectations.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button size="lg" asChild className="group">
                <a href="#contact">
                  Let's Work Together
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Skills and Features Section - Below the image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 space-y-8"
        >
          {/* Features Section */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">What I Bring</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={feature.title}
                  className="border-0 bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <h5 className="font-medium mb-2">{feature.title}</h5>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
