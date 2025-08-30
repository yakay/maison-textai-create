import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Brain } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-ai-brain.jpg";

const HeroSection = () => {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleGenerate = () => {
    if (inputText.trim()) {
      setGeneratedText("Transform your ideas into compelling content with our advanced AI technology. Whether you need blog posts, marketing copy, or creative writing, MasionTextAI delivers exceptional results that engage your audience and drive results.");
    }
  };

  return (
    <section className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Transform Your{" "}
              <span className="gradient-text">Ideas</span> Into Perfect{" "}
              <span className="gradient-text">Text</span>
            </h1>
            
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Harness the power of advanced AI to generate compelling content that captivates your audience. From blog posts to marketing copy, create professional-grade text in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group">
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-primary" />
                <span>AI Powered</span>
              </div>
            </div>
          </div>

          {/* Right Content - AI Demo */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="AI Brain Network" 
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl opacity-20 animate-float"
            />
            
            <Card className="relative glass-effect p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4 gradient-text">Try AI Text Generation</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-foreground/70 mb-2 block">
                    Describe what you want to write about:
                  </label>
                  <Textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="e.g., Write a blog post about sustainable living..."
                    className="glass-effect border-white/20 min-h-[100px]"
                  />
                </div>

                <Button 
                  onClick={handleGenerate}
                  variant="hero" 
                  className="w-full"
                  disabled={!inputText.trim()}
                >
                  Generate Text
                </Button>

                {generatedText && (
                  <div className="glass-effect p-4 rounded-lg border border-white/20">
                    <label className="text-sm text-foreground/70 mb-2 block">
                      Generated Content:
                    </label>
                    <p className="text-sm leading-relaxed">{generatedText}</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;