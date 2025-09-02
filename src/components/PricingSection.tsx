import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Founder",
    price: "$99",
    period: "/month",
    description: "Perfect for emerging founders and entrepreneurs",
    badge: "Most Popular",
    icon: Star,
    features: [
      "Verified BizzNS ID",
      "AI-powered matching",
      "Basic messaging",
      "Monthly networking events",
      "Profile verification",
      "Community access"
    ],
    cta: "Start Your Journey"
  },
  {
    name: "Executive",
    price: "$299",
    period: "/month", 
    description: "For established leaders and industry veterans",
    badge: "Premium",
    icon: Crown,
    features: [
      "Everything in Founder",
      "Priority matching",
      "Unlimited messaging",
      "Weekly exclusive events",
      "Thought leadership platform",
      "Direct investor access",
      "Custom event hosting"
    ],
    cta: "Unlock Premium Access"
  },
  {
    name: "Visionary",
    price: "$799",
    period: "/month",
    description: "Elite tier for industry influencers and major investors",
    badge: "Exclusive",
    icon: Sparkles,
    features: [
      "Everything in Executive",
      "White-glove concierge",
      "Private advisory sessions",
      "Exclusive C-suite events",
      "Global networking access",
      "Custom partnership facilitation",
      "Personal brand amplification",
      "Direct line to platform leadership"
    ],
    cta: "Apply for Elite Status"
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-navy-deep/5 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-blue-accent/30 text-blue-accent">
            Membership Tiers
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="bg-premium-gradient bg-clip-text text-transparent">
              Leadership Level
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Each tier is designed to match your influence and networking needs. 
            All memberships include our core verification and matching features.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-all duration-premium hover:scale-105 ${
                index === 1 
                  ? 'border-blue-accent shadow-blue lg:scale-105' 
                  : 'border-blue-accent/20 hover:border-blue-accent/40'
              }`}
            >
              {/* Popular Badge */}
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-gradient text-navy-deep font-semibold">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center space-y-4 pt-8">
                <div className="w-16 h-16 bg-premium-gradient rounded-2xl flex items-center justify-center mx-auto">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-navy-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Billed annually</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant={index === 1 ? "premium" : "outline"}
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <Link to="/signup">
                    {plan.cta}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="text-center mt-16 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-blue-accent/20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="w-5 h-5 text-blue-accent" />
            <span className="font-semibold text-navy-primary">Exclusive Membership</span>
            <Crown className="w-5 h-5 text-blue-accent" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All memberships are subject to application review and verification. 
            We maintain exclusivity to ensure the highest quality networking experience for our members.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;