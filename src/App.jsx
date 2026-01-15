import React, { useState, useEffect } from 'react'
import IntroSlide from './IntroSlide'
import TechStackSlide from './TechStackSlide'
import UXFlowSlide from './UXFlowSlide'
import BusinessModelSlide from './BusinessModelSlide'
import UserFlowSlide from './UserFlowSlide'
import VisionSlide from './VisionSlide'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <IntroSlide key="intro" />,
    <UserFlowSlide key="flow" />,
    <TechStackSlide key="tech" />,
    <UXFlowSlide key="ux" />,
    <BusinessModelSlide key="bm" />,
    <VisionSlide key="vision" />
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full h-screen bg-slate-200 flex items-center justify-center overflow-hidden relative">
      {slides[currentSlide]}
      <div className="absolute bottom-4 right-4 text-slate-800 text-xs font-mono opacity-50">
        Slide {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}

export default App
