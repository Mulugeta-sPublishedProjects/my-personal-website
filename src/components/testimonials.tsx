"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MessageSquare,
  Star,
  ExternalLink,
  Linkedin,
  Briefcase,
  Code,
  Database,
  Smartphone,
  CheckCircle,
  MapPin,
  Calendar,
  Building,
  ChevronDown,
  ChevronUp,
  Quote,
  User,
} from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  message: string;
  avatar: string;
  telegram: string;
  linkedin: string;
  tags: string[];
  icon: React.ReactNode;
  duration: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Melese Gashwa",
    role: "Senior Backend Developer",
    company: "Top Link Technology PLC",
    location: "Addis Ababa, Ethiopia",
    message:
      "Mulugeta is an exceptional frontend developer with a keen eye for detail and user experience. His ability to translate complex requirements into clean, efficient code is impressive. We've worked together on several projects, and his technical expertise and collaborative approach consistently deliver outstanding results. His knowledge of React ecosystem and modern frontend practices makes him a valuable asset to any development team.",
    avatar: "/avatars/melese.jpg",
    telegram: "https://t.me/melesegashwa",
    linkedin: "https://linkedin.com/in/melesegashwa",
    tags: ["Backend", "API Design", "Node.js", "Problem Solving"],
    icon: <Code className="h-4 w-4" />,
    duration: "3+ years",
  },
  {
    id: 2,
    name: "Mekane Hiwot Fiseha",
    role: "Project Manager",
    company: "Top Link Technology PLC",
    location: "Addis Ababa, Ethiopia",
    message:
      "Working with Mulugeta has been a pleasure. His technical skills are matched only by his professionalism and commitment to project timelines. He has a unique ability to understand both technical requirements and business objectives, making him an invaluable team member on any project. His communication skills and attention to detail ensure that projects are delivered on time and exceed expectations.",
    avatar: "/avatars/mekane.jpg",
    telegram: "https://t.me/mekanehiwot",
    linkedin: "https://linkedin.com/in/mekanehiwotfiseha",
    tags: ["Project Management", "Leadership", "Communication", "Agile"],
    icon: <Briefcase className="h-4 w-4" />,
    duration: "5+ years",
  },
  {
    id: 3,
    name: "Getahun Honelet",
    role: "Senior Mobile Developer",
    company: "Top Link Technology PLC",
    location: "Addis Ababa, Ethiopia",
    message:
      "Mulugeta's frontend expertise significantly improved our cross-platform applications. His attention to responsive design and performance optimization helped us deliver a seamless user experience across all devices. His collaborative approach and willingness to share knowledge make him a great team player. I've been particularly impressed with his ability to optimize React applications for maximum performance.",
    avatar: "/avatars/getahun.jpg",
    telegram: "https://t.me/getahunhonelet",
    linkedin: "https://linkedin.com/in/getahunhonelet",
    tags: ["Mobile Development", "React Native", "UI/UX", "Performance"],
    icon: <Smartphone className="h-4 w-4" />,
    duration: "4+ years",
  },
  {
    id: 4,
    name: "Brihanu Gudisa",
    role: "Data Analyst",
    company: "Top Link Technology PLC",
    location: "Addis Ababa, Ethiopia",
    message:
      "I've collaborated with Mulugeta on several data visualization projects. His ability to create intuitive interfaces for complex data sets is remarkable. He understands how to present information in a way that's both visually appealing and functionally efficient. His frontend skills combined with his understanding of data requirements make him an excellent bridge between technical and business teams.",
    avatar: "/avatars/brihanu.jpg",
    telegram: "https://t.me/brihanugudisa",
    linkedin: "https://linkedin.com/in/brihanugudisa",
    tags: ["Data Visualization", "Analytics", "UI Design", "D3.js"],
    icon: <Database className="h-4 w-4" />,
    duration: "3+ years",
  },
  {
    id: 5,
    name: "Abel Teha",
    role: "Senior Frontend Developer",
    company: "Top Link Technology PLC",
    location: "Addis Ababa, Ethiopia",
    message:
      "Mulugeta is one of the most skilled frontend developers I've worked with. His code is clean, well-structured, and follows best practices. He's always eager to learn new technologies and share his knowledge with the team. His contributions have been essential to our project's success. I particularly appreciate his attention to accessibility and user experience in all his implementations.",
    avatar: "/avatars/abel.jpg",
    telegram: "https://t.me/abelteha",
    linkedin: "https://linkedin.com/in/abelteha",
    tags: ["Frontend", "React", "Team Lead", "Accessibility"],
    icon: <Code className="h-4 w-4" />,
    duration: "5+ years",
  },
  {
    id: 6,
    name: "Assefa Ayalew",
    role: "Frontend Developer",
    company: "Top Link Technology PLC",
    location: "Addis Ababa, Ethiopia",
    message:
      "Working alongside Mulugeta has been a great learning experience. His approach to problem-solving and his attention to detail in UI implementation is outstanding. He's always willing to help team members and contributes significantly to code reviews and architectural decisions. His mentorship has helped many junior developers on our team improve their skills significantly.",
    avatar: "/avatars/assefa.jpg",
    telegram: "https://t.me/assefaayalew",
    linkedin: "https://linkedin.com/in/assefaayalew",
    tags: ["Frontend", "JavaScript", "Mentorship", "Vue.js"],
    icon: <Code className="h-4 w-4" />,
    duration: "2+ years",
  },
];

// ExpandableTestimonial component
const ExpandableTestimonial = ({
  text,
  maxLength = 180,
}: {
  text: string;
  maxLength?: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (text.length <= maxLength) {
    return <p className="text-sm leading-relaxed">{text}</p>;
  }
  return (
    <>
      <p className="text-sm leading-relaxed">
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </p>
      <Button
        variant="ghost"
        className="h-auto p-0 text-primary text-xs font-medium hover:bg-transparent"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <>
            <ChevronUp className="h-3 w-3 mr-1" />
            Show Less
          </>
        ) : (
          <>
            <ChevronDown className="h-3 w-3 mr-1" />
            Read More
          </>
        )}
      </Button>
    </>
  );
};

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border-border/50 bg-card/80 backdrop-blur-sm">
        {/* Header with gradient accent */}
        <div className="h-1 bg-gradient-to-r from-primary via-primary/70 to-primary/30"></div>
        <CardContent className="p-6 flex flex-col h-full">
          {/* Profile Section */}
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <Avatar className="h-16 w-16 border-2 border-primary/20 ring-4 ring-primary/5">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1 shadow-md">
                {testimonial.icon}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <Badge
                  variant="secondary"
                  className="text-xs bg-primary/10 text-primary"
                >
                  {testimonial.duration}
                </Badge>
              </div>
              <p className="text-sm font-medium text-primary mb-1">
                {testimonial.role}
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Building className="h-3 w-3" />
                <span>{testimonial.company}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{testimonial.location}</span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="relative mb-4">
            <Quote className="absolute -top-3 -left-2 h-8 w-8 text-primary/20" />
            <ExpandableTestimonial text={testimonial.message} />
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {testimonial.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs border-primary/20 text-primary"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Rating and Actions */}
          <div className="mt-auto pt-4 border-t border-border/50">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">5.0</span>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 px-3 hover:bg-primary/10"
                  asChild
                >
                  <a
                    href={testimonial.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs"
                  >
                    <MessageSquare className="h-3 w-3" />
                    Telegram
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 px-3 hover:bg-primary/10"
                  asChild
                >
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs"
                  >
                    <Linkedin className="h-3 w-3" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TestimonialPage: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-gradient-to-br from-background via-background to-muted/10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <Badge variant="outline" className="mb-4 px-3 py-1 font-medium">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Voices of Collaboration
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from professionals who've experienced my work ethic, technical
            expertise, and collaborative approach firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 md:mt-24">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <User className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Create Something Amazing Together
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            I'm always excited to collaborate on new projects and bring
            innovative ideas to life.
          </p>
          <Button
            size="lg"
            className="group shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a href="#contact" className="flex items-center gap-2">
              Start a Conversation
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPage;
