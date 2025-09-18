"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Globe, Star, Users, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const techStack = [
    "Next.js 14+", "TypeScript", "React", "Tailwind CSS", 
    "Framer Motion",
  ];

  const features = [
    { icon: Zap, title: "AI-Powered", description: "Smart content optimization and suggestions" },
    { icon: Code, title: "17+ Templates", description: "Professional templates for every industry" },
    { icon: Users, title: "User-Friendly", description: "Intuitive interface with real-time preview" },
    { icon: Star, title: "Export Ready", description: "Direct PDF download and print support" }
  ];

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">About MUZZI AI RESUME</h1>
          <p className="text-muted-foreground text-lg">
            Create AI-Based Smart and Simple Professional Resume
          </p>
        </div>

        {/* Developer Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Developer Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-semibold">M.Muzammil</h3>
                <p className="text-muted-foreground">AI Powerd MERN Stack Developer</p>
                <p className="text-sm leading-relaxed">
                  Passionate about creating innovative solutions that simplify professional workflows 
                  and enhance user experiences through modern web technologies. Specialized in building 
                  scalable applications with React, Next.js, and AI integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href="https://github.com/muzammil67552" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href="https://www.linkedin.com/in/muhammad-muzammil-2aa32628a/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href="mailto:yoursmuzammil16070@gmail.com">
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Description */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed">
              <strong>MUZZI AI RESUME</strong> is an intelligent resume builder that leverages AI technology 
              to help users create professional, ATS-friendly resumes with ease. The platform combines 
              modern web technologies with artificial intelligence to provide a seamless resume creation experience.
            </p>
            
            <Separator />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <feature.icon className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technology Stack
            </CardTitle>
            <CardDescription>
              Built with modern technologies for optimal performance and user experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium">Core Features</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• AI-powered content optimization</li>
                  <li>• 17+ professional templates</li>
                  <li>• Real-time preview</li>
                  <li>• Direct PDF export</li>
                  <li>• Auto-save functionality</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Advanced Features</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Multi-language support</li>
                  <li>• Dark mode support</li>
                  <li>• Local storage security</li>
                  <li>• Responsive design</li>
                  <li>• Industry-specific templates</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Project Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">17+</div>
                <div className="text-sm text-muted-foreground">Templates</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Industries</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Free</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">AI</div>
                <div className="text-sm text-muted-foreground">Powered</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}