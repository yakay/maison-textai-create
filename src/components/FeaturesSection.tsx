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
            {/* Right Content */}
            <div className="order-2 lg:order-1">
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

            {/* Left Visual - Curved Images */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                {/* Large curved container */}
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 rounded-[3rem] overflow-hidden transform rotate-12">
                    <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-800"></div>
                  </div>
                  <div className="absolute top-8 left-8 w-32 h-32 rounded-[2rem] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-600"></div>
                  </div>
                  <div className="absolute bottom-8 right-8 w-24 h-24 rounded-[1.5rem] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Before Section */}
        <div className="mt-32">
          <div className="text-right mb-8">
            <h3 className="text-3xl font-bold gradient-text">Before</h3>
          </div>
          <div className="glass-effect rounded-2xl overflow-hidden border border-white/20">
            <div className="aspect-video bg-gradient-to-br from-emerald-900/20 to-teal-800/20 flex items-center justify-center">
              <p className="text-foreground/60 text-lg">Interior Design Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;