import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Crown, Shield, Users, ArrowRight, Mail, Lock, User, Building } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20 bg-gradient-to-br from-background via-background to-navy-deep/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="outline" className="border-gold-accent/30 text-gold-accent">
                  Exclusive Application
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Join the{" "}
                  <span className="bg-premium-gradient bg-clip-text text-transparent">
                    Elite Circle
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Apply for membership in the most exclusive business networking platform. 
                  Connect with verified founders, investors, and industry leaders.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-gold-accent" />
                  <span className="font-medium">Verified-only network with BizzNS ID</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gold-accent" />
                  <span className="font-medium">AI-powered matching with industry leaders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Crown className="w-5 h-5 text-gold-accent" />
                  <span className="font-medium">Access to exclusive events and opportunities</span>
                </div>
              </div>

              {/* Application Process */}
              <Card className="border-gold-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg">Application Process</CardTitle>
                  <CardDescription>Your journey to exclusive membership</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-premium-gradient text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                    <span className="text-sm">Submit application with professional details</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-premium-gradient text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                    <span className="text-sm">Document verification and reference check</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-premium-gradient text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                    <span className="text-sm">Welcome to your exclusive network</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Application Form */}
            <div>
              <Card className="border-gold-accent/20 shadow-premium">
                <CardHeader>
                  <CardTitle className="text-2xl">Membership Application</CardTitle>
                  <CardDescription>
                    Start your journey to exclusive business networking
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Social Login */}
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full" size="lg">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Continue with Google
                    </Button>
                    
                    <Button variant="outline" className="w-full" size="lg">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Continue with LinkedIn
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or apply directly</span>
                    </div>
                  </div>

                  {/* Application Form */}
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input id="firstName" placeholder="John" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input id="lastName" placeholder="Doe" className="pl-10" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Professional Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="email" type="email" placeholder="john@company.com" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Organization</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="company" placeholder="Your Company" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="password" type="password" placeholder="Create secure password" className="pl-10" />
                      </div>
                    </div>

                    <Button variant="premium" className="w-full" size="lg">
                      Submit Application
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link to="/login" className="text-gold-accent hover:underline font-medium">
                        Sign in here
                      </Link>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      By applying, you agree to our{" "}
                      <Link to="/terms" className="text-gold-accent hover:underline">Terms</Link> and{" "}
                      <Link to="/privacy" className="text-gold-accent hover:underline">Privacy Policy</Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Signup;