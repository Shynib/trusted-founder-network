import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Shield, Users, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-networking.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-navy-deep/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent)] opacity-50" />
      
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <Badge variant="outline" className="inline-flex items-center space-x-2 border-blue-accent/30 text-blue-accent">
              <Sparkles className="w-4 h-4" />
              <span>Invitation Only Network</span>
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your{" "}
                <span className="bg-premium-gradient bg-clip-text text-transparent">
                  Exclusive Circle
                </span>{" "}
                of Trusted Leaders
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Connect with verified founders, investors, and industry experts in a curated ecosystem built on trust, credibility, and meaningful collaboration.
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-accent" />
                <span className="text-sm font-medium">Verified Profiles</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-accent" />
                <span className="text-sm font-medium">AI Matchmaking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-blue-accent" />
                <span className="text-sm font-medium">Exclusive Events</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="premium" size="lg" className="group" asChild>
                <Link to="/signup">
                  Apply for Membership
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/features">Learn More</Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-blue-accent/20">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leaders from</p>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-navy-light">
                <span>Fortune 500</span>
                <span>•</span>
                <span>Y Combinator</span>
                <span>•</span>
                <span>Sequoia Capital</span>
                <span>•</span>
                <span>Andreessen Horowitz</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <img 
                src={heroImage}
                alt="Exclusive business networking event"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/20 to-transparent" />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -top-6 -left-6 bg-card border border-blue-accent/20 rounded-xl p-4 shadow-blue backdrop-blur-sm">
              <div className="text-2xl font-bold text-navy-primary">2.5K+</div>
              <div className="text-sm text-muted-foreground">Verified Leaders</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card border border-blue-accent/20 rounded-xl p-4 shadow-blue backdrop-blur-sm">
              <div className="text-2xl font-bold text-navy-primary">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;