import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-foreground">MAISON</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors text-sm uppercase tracking-wide">
              About
            </a>
            <a href="#product" className="text-foreground/80 hover:text-foreground transition-colors text-sm uppercase tracking-wide">
              Product
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors text-sm uppercase tracking-wide">
              Contact
            </a>
            <a href="#showcase" className="text-foreground/80 hover:text-foreground transition-colors text-sm uppercase tracking-wide">
              Showcase
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="hero" size="sm" className="rounded-full px-6">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;