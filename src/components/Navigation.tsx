import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Crown, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-blue-accent/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-premium-gradient rounded-xl flex items-center justify-center group-hover:shadow-blue transition-all duration-premium">
              <Crown className="w-6 h-6 text-blue-accent" />
            </div>
            <span className="text-2xl font-bold bg-premium-gradient bg-clip-text text-transparent">
              Foundr's
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-muted-foreground hover:text-navy-primary transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-navy-primary transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-navy-primary transition-colors">
              About
            </Link>
            <Button variant="outline" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button variant="premium" asChild>
              <Link to="/signup">Join Exclusive Circle</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-accent/20">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/features" 
                className="text-muted-foreground hover:text-navy-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className="text-muted-foreground hover:text-navy-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-navy-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                </Button>
                <Button variant="premium" asChild className="w-full">
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Join Exclusive Circle</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;