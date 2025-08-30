import { Card } from "@/components/ui/card";
import { Pen, Zap, Target, Shield, Globe, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Pen className="h-8 w-8" />,
    title: "Multiple Content Types",
    description: "Generate blogs, articles, marketing copy, emails, and more with specialized AI models for each content type."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast Generation",
    description: "Get professional-quality content in seconds, not hours. Our optimized AI delivers results instantly."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Precise Control",
    description: "Fine-tune tone, style, length, and format to match your brand voice and audience perfectly."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Original Content",
    description: "Every piece is unique and plagiarism-free, ensuring your content stands out and ranks well."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Multi-Language Support",
    description: "Create content in 50+ languages with native-level fluency and cultural understanding."
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "SEO Optimized",
    description: "Built-in SEO optimization ensures your content ranks higher and drives more organic traffic."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for{" "}
            <span className="gradient-text">Content Creation</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover the advanced capabilities that make MasionTextAI the ultimate tool for content creators, marketers, and writers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-effect p-8 border border-white/20 hover:border-primary/50 transition-all duration-300 group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;