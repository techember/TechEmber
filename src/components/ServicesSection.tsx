import React, { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, TrendingUp, Share2, Video, WandSparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const carouselRef = useRef(null);
  const [cardsToShow, setCardsToShow] = useState(3);
  const navigate = useNavigate();
  const handleLearnMore = () => {
        navigate('/services');  // Change from router.push to navigate
    };
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies for optimal performance and user experience.',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and conversions.',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Engaging social campaigns that boost brand and community.',
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services for marketing, educational, and entertainment content.',
    },
    {
      icon: WandSparkles,
      title: 'Graphic Designing',
      description: 'Creative graphic design solutions to elevate your brand identity and captivate your audience.',
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovering, services.length]);
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
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % services.length;
      visibleCards.push({ ...services[index], originalIndex: index });
    }
    return visibleCards;
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-gray-700">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your business needs and drive growth
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
            {getVisibleCards().map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredCard === service.originalIndex;
              
              return (
                <div
                  key={`${service.originalIndex}-${currentIndex}`}
                  className={`w-90 sm:w-80 transition-all duration-500 ${index === 1 ? 'scale-105 z-10' : 'scale-95 opacity-80'}`}
                  onMouseEnter={() => setHoveredCard(service.originalIndex)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card */}
                  <div className="relative bg-black rounded-2xl p-4 h-[300px] overflow-hidden group">
                    {/* Animated Border Gradient */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-[length:200%_200%] animate-gradient-x p-0.5">
                        <div className="w-full h-full bg-black rounded-2xl"></div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="relative bg-black rounded-2xl p-3 h-[300px] overflow-hidden group">
                      {/* Icon */}
                      <div className={`w-20 h-20 sm:w-14 sm:h-14 mb-4 bg-white rounded-2xl flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                        <Icon className="w-18 h-18 sm:w-8 sm:h-8 text-black" />
                      </div>

                      {/* Title */}
                      <h3 className={`text-4xl sm:text-2xl font-bold mb-4 transition-colors duration-300 ${isHovered ? 'text-orange-400' : 'text-white'}`}>
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="hidden sm:block text-sm sm:text-base text-gray-300 mb-6 leading-relaxed flex-1">
                        {service.description}
                      </p>
                    </div>

                    {/* Learn More Button - Partially inside/outside card */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <button onClick={handleLearnMore} className={`w-full py-2 sm:py-3 px-3 bg-white text-black rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform ${isHovered ? 'translate-y-0 bg-gradient-to-r from-orange-500 to-red-500 text-white' : 'translate-y-0'}`}>
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-2">
            {services.map((_, index) => (
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
      </div>

      {/* Custom CSS for gradient animation
      <style jsx>{`
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

export default ServicesSection;