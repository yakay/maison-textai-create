import main_page_second from "../assets/main_page_second.png"; 
import main_page_third from "../assets/main_page_third.png"; 


const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Curved Design Section */}
        <div className="relative mb-20">
          {/* Background Curves */}
          <div className="absolute inset-0 -z-10">
            <svg
              viewBox="0 0 1200 600"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M0,300 Q300,100 600,300 T1200,200 L1200,600 L0,600 Z"
                fill="url(#curveGradient)"
                opacity="0.1"
              />
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(263, 70%, 50%)" />
                  <stop offset="100%" stopColor="hsl(220, 100%, 50%)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Visual (sola alındı) */}
   
              <div className="bg-card rounded-lg p-6 mb-6">
               <div>
      <img src={main_page_second} alt="My" style={{ width: "600px" }} />
    </div>
              </div>

            {/* Right Content */}
            <div className="order-2 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">Innovative Approaches</span>{" "}
                to Home Textiles with{" "}
                <span className="gradient-text">Artificial Intelligence</span>{" "}
                Support
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Explore a comprehensive approach to artificial intelligence combined with interior design elements, allowing for a unique configuration of colors, textures, materials, and home environment that will take up minimal time and deliver maximum effect.
              </p>
            </div>
          </div>
        </div>

        {/* Before Section */}
        <div className="mt-32">
         <div>
      <img src={main_page_third} alt="My" />
    </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
