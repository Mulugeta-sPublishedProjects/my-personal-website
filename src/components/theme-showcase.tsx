"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  CheckCircle,
  CreditCard,
  Settings,
  Bell,
  User,
  Mail,
  Lock,
  Palette,
  Zap,
  Globe,
  Heart,
  Star,
  ThumbsUp,
} from "lucide-react";

export function ThemeShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Button Variants Showcase */}
      <Card className="border-border/50 backdrop-blur-sm bg-card/50 hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
          <CardDescription>Different button styles and sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Zap className="size-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="destructive">Destructive</Button>
            <Button variant="glow">Glow</Button>
            <Button variant="gradient">Gradient</Button>
          </div>
        </CardContent>
      </Card>

      {/* Badge Variants Showcase */}
      <Card className="border-border/50 backdrop-blur-sm bg-card/50 hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle>Badge Variants</CardTitle>
          <CardDescription>Different badge styles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">Glass</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Form Elements Showcase */}
      <Card className="border-border/50 backdrop-blur-sm bg-card/50 hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
          <CardDescription>Input fields and controls</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Showcase */}
      <Card className="md:col-span-2 lg:col-span-1 border-border/50 backdrop-blur-sm bg-card/50 hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle>Tabs</CardTitle>
          <CardDescription>Tabbed interface component</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground">
                Make changes to your account here. Click save when you&apos;re
                done.
              </p>
            </TabsContent>
            <TabsContent value="password" className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground">
                Change your password here. After saving, you&apos;ll be logged
                out.
              </p>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground">
                Manage your notification preferences.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Icon Showcase */}
      <Card className="lg:col-span-2 border-border/50 backdrop-blur-sm bg-card/50 hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle>Icons</CardTitle>
          <CardDescription>
            Common icons used throughout the application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-all duration-300">
              <User className="size-6" />
              <span className="text-xs">User</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-all duration-300">
              <Settings className="size-6" />
              <span className="text-xs">Settings</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-all duration-300">
              <Mail className="size-6" />
              <span className="text-xs">Mail</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-all duration-300">
              <Lock className="size-6" />
              <span className="text-xs">Lock</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-all duration-300">
              <Bell className="size-6" />
              <span className="text-xs">Bell</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-all duration-300">
              <Palette className="size-6" />
              <span className="text-xs">Palette</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-all duration-300">
              <CreditCard className="size-6" />
              <span className="text-xs">Credit Card</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-all duration-300">
              <Calendar className="size-6" />
              <span className="text-xs">Calendar</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-all duration-300">
              <CheckCircle className="size-6" />
              <span className="text-xs">Check</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-all duration-300">
              <Zap className="size-6" />
              <span className="text-xs">Zap</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-all duration-300">
              <Globe className="size-6" />
              <span className="text-xs">Globe</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent transition-all duration-300">
              <Heart className="size-6" />
              <span className="text-xs">Heart</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Showcase */}
      <Card className="border-border/50 backdrop-blur-sm bg-card/50 hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle>Additional Components</CardTitle>
          <CardDescription>More UI elements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="icon">
              <Heart className="size-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Star className="size-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ThumbsUp className="size-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Status: Active</Badge>
            <Badge variant="secondary">Version 2.1</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
