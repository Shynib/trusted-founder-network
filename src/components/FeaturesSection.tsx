import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Brain, Calendar, MessageSquare, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "BizzNS ID Verification",
    description: "Rigorous document and referral verification ensures every member is a genuine business leader.",
    badge: "Trust & Security"
  },
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Smart algorithms connect you with the right leaders based on goals, expertise, and collaboration potential.",
    badge: "Smart Technology"
  },
  {
    icon: Calendar,
    title: "Exclusive Events",
    description: "Access invite-only networking events, roundtables, and industry summits with verified leaders.",
    badge: "Premium Access"
  },
  {
    icon: MessageSquare,
    title: "Secure Messaging",
    description: "End-to-end encrypted communications with conversation starters based on mutual interests.",
    badge: "Private & Secure"
  },
  {
    icon: Trophy,
    title: "Thought Leadership",
    description: "Publish insights and build your reputation with AI-curated leaderboards and content visibility.",
    badge: "Reputation Building"
  },
  {
    icon: Users,
    title: "Tiered Membership",
    description: "Escalating privileges and access to high-profile investors and industry executives based on membership level.",
    badge: "Exclusive Tiers"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-navy-deep/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-blue-accent/30 text-blue-accent">
            Platform Features
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Built for{" "}
            <span className="bg-premium-gradient bg-clip-text text-transparent">
              Serious Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every feature is designed with trust, exclusivity, and meaningful connections in mind. 
            Join a platform where quality trumps quantity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-blue-accent/20 hover:shadow-premium transition-all duration-premium hover:scale-105 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-premium-gradient rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to experience the future of business networking?
          </p>
          <div className="inline-flex items-center space-x-4">
            <div className="w-2 h-2 bg-blue-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-navy-primary">Application Review in Progress</span>
            <div className="w-2 h-2 bg-blue-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;