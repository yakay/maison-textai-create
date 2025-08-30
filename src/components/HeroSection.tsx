import { Button } from "@/components/ui/button";
import myPhoto from "../assets/main_page.png"; 
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
              Step into the future. Masion is designed using AI transformation assistance, providing you with seamless interior design suggestions, all based on one single click. This intuitive platform allows you to manage your upcoming room ideas in a fresh way, by optimizing your design preferences and making your digital project look good.
            </p>

            <div className="flex gap-4 mb-12">
              <Button variant="hero" size="lg">
                Try for free
              </Button>
            </div>
          </div>

              <div className="bg-card rounded-lg p-6 mb-6">
               <div>
      <img src={myPhoto} alt="My" style={{ width: "600px" }} />
    </div>
              </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;