import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Advanced AI tool</span>{" "}
              for industry professionals
            </h1>
            
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg">
              Step into the future. Maison is designed using AI transformation assistance, providing you with seamless interior design suggestions, all based on one single click. This intuitive platform allows you to manage your upcoming room ideas in a fresh way, by optimizing your design preferences and making your digital project look good.
            </p>

            <div className="flex gap-4 mb-12">
              <Button variant="hero" size="lg">
                Try for free
              </Button>
            </div>
          </div>

          {/* Right Content - Interface Preview */}
          <div className="relative">
            <div className="glass-effect p-6 border border-white/20 rounded-2xl">
              <div className="bg-card rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-muted/50 h-20 rounded"></div>
                  <div className="bg-muted/50 h-20 rounded"></div>
                  <div className="bg-muted/50 h-20 rounded"></div>
                  <div className="bg-muted/50 h-20 rounded"></div>
                  <div className="bg-muted/50 h-20 rounded"></div>
                  <div className="bg-muted/50 h-20 rounded"></div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-foreground/60">AI-Powered Interior Design Interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;