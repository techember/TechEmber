import React, { useState, useEffect, useRef } from 'react';
import { Shield, Zap, Users, Award, Clock, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const WhyChooseUsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const carouselRef = useRef(null);
  const [cardsToShow, setCardsToShow] = useState(3);

  const reasons = [
    {
      icon: Shield,
      title: 'Reliable & Secure',
      description: 'Enterprise-grade security and reliability in every solution we deliver for complete peace of mind.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance and quick turnaround times for all projects without compromising quality.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience in cutting-edge technologies and best practices.',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes ensure exceptional results every single time.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and maintenance services for continuous peace of mind and reliability.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on achieving your business objectives and driving sustainable growth for your company.',
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reasons.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovering, reasons.length]);
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {  // Tailwind's `sm` breakpoint
      setCardsToShow(1);
    } else {
      setCardsToShow(3);
    }
  };

  handleResize(); // set initial value
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % reasons.length;
      visibleCards.push({ ...reasons[index], originalIndex: index });
    }
    return visibleCards;
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Choose <span className="text-gray-700">TechEmber</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine innovation, expertise, and dedication to deliver exceptional results that exceed expectations
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Arrows - Only visible on hover */}
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <button
              onClick={prevSlide}
              className="bg-black/80 hover:bg-black text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <button
              onClick={nextSlide}
              className="bg-black/80 hover:bg-black text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Cards Container */}
          <div className="flex justify-center gap-6 px-16">
            {getVisibleCards().map((reason, index) => {
              const Icon = reason.icon;
              const isHovered = hoveredCard === reason.originalIndex;
              
              return (
                <div
                  key={`${reason.originalIndex}-${currentIndex}`}
                  className={`w-80 transition-all duration-500 ${index === 1 ? 'scale-105 z-10' : 'scale-95 opacity-80'}`}
                  onMouseEnter={() => setHoveredCard(reason.originalIndex)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card */}
                  <div className="relative bg-black rounded-2xl p-4 h-[250px] overflow-hidden group">
                    {/* Animated Border Gradient */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-[length:200%_200%] animate-gradient-x p-0.5">
                        <div className="w-full h-full bg-black rounded-2xl"></div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="relative bg-black rounded-2xl p-3 h-[300px] overflow-hidden group">
                      {/* Icon */}
                      <div className={`w-20 h-20 mb-4 bg-white rounded-2xl flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                        <Icon className="w-18 h-18 text-black" />
                      </div>

                      {/* Title */}
                      <h3 className={`text-3xl sm:text-2xl font-bold my-2 sm:mb-4 transition-colors duration-300 ${isHovered ? 'text-orange-400' : 'text-white'}`}>
                        {reason.title}
                      </h3>

                      {/* Description */}
                      <p className="hidden sm:block text-sm sm:text-base text-gray-300 my-2 sm:mb-6 leading-relaxed flex-1">
                        {reason.description}
                      </p>
                    </div>

                    {/* Learn More Button - Inside card */}
                    {/* <div className="absolute bottom-4 left-8 right-8">
                      <button className={`w-full py-3 px-3 bg-white text-black rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform ${isHovered ? 'translate-y-0 bg-gradient-to-r from-orange-500 to-red-500 text-white' : 'translate-y-0'}`}>
                        Learn More
                      </button>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-2">
            {reasons.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-black scale-125' 
                    : 'bg-gray-300 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Ready to experience the Techember difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg">
              Start Your Project
            </button>
            <button onClick={() => {
    const footer = document.getElementById("footer");
    footer?.scrollIntoView({ behavior: "smooth" });
  }} className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for gradient animation */}
      {/* <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style> */}
    </section>
  );
};

export default WhyChooseUsSection;