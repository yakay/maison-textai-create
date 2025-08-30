import React, { useState, useRef } from "react";
import main_page_second from "../assets/main_page_second.png";
import main_page_3 from "../assets/main_page_3.jpg";
import main_page_slider from "../assets/main_page_slider.jpg";

const FeaturesSection = () => {
  const [sliderValue, setSliderValue] = useState(0); // Başlangıç solda
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const onPointerDown = () => {
    dragging.current = true;
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newValue = ((e.clientX - rect.left) / rect.width) * 100;
    newValue = Math.min(Math.max(newValue, 0), 100);
    setSliderValue(newValue);
  };

  const onTouchMove = (e) => {
    if (!dragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let touch = e.touches[0];
    let newValue = ((touch.clientX - rect.left) / rect.width) * 100;
    newValue = Math.min(Math.max(newValue, 0), 100);
    setSliderValue(newValue);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* ... diğer içerik */}

        <div className="mt-32">
          <div className="text-right mb-8">
            <h3 className="text-3xl font-bold gradient-text">Before / After</h3>
          </div>

          <div
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-xl border border-white/10 shadow-lg select-none"
            style={{ userSelect: "none" }}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onTouchMove={onTouchMove}
            onPointerDown={onPointerDown}
            onTouchStart={onPointerDown}
            onTouchEnd={onPointerUp}
          >
            {/* Alt görsel (After) */}
            <img
              src={main_page_slider}
              alt="After"
              className="absolute top-0 left-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Üst görsel (Before) */}
            <img
              src={main_page_3}
              alt="Before"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{
                clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`,
                transition: "clip-path 0.3s ease-out",
              }}
              draggable={false}
            />

            {/* Mor Geçiş Çizgisi */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: `${sliderValue}%`,
                transform: "translateX(-50%)",
                height: "100%",
                width: "4px",
                background: "linear-gradient(180deg, #7c3aed, #9333ea)",
                borderRadius: "2px",
                zIndex: 20,
                pointerEvents: "none",
                transition: "left 0.3s ease-out", // geçiş eklendi
              }}
            />

            {/* Özel tutma noktası (handle) */}
            <div
              onPointerDown={onPointerDown}
              onTouchStart={onPointerDown}
              style={{
                position: "absolute",
                top: "50%",
                left: `${sliderValue}%`,
                transform: "translate(-50%, -50%)",
                width: "36px",
                height: "36px",
                backgroundColor: "#7c3aed",
                borderRadius: "50%",
                boxShadow:
                  "0 0 8px 2px rgba(124, 58, 237, 0.7), 0 0 15px 5px rgba(147, 51, 234, 0.5)",
                cursor: "grab",
                zIndex: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
                transition: "left 0.3s ease-out", // aynı geçiş eklendi
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <polyline points="16 12 12 8 8 12"></polyline>
                <polyline points="8 12 12 16 16 12"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
