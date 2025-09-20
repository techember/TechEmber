import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  animationDirection: 'left' | 'right';
}

const ReviewsSection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const reviews: Review[] = [
    {
      id: 1,
      name: "BillBank",
      rating: 5,
      review: "Tech Ember solved a problem I had been struggling with for weeks in just one visit. Their team is efficient, professional, and clearly skilled at what they do. I’m so glad I found them!",
      animationDirection: 'left'
    },
    {
      id: 2,
      name: "Madhur Sharma",
      rating: 5,
      review: "Great experience with this company. I would like to use the services again. Great work TechEmber 💓",
      animationDirection: 'right'
    },
    {
      id: 3,
      name: "Shri Ji Girls Hostel",
      rating: 5,
      review: "They made our website by keeping every small detail in mind and 24/7 available for any changes requested.",
      animationDirection: 'left'
    },
    {
      id: 4,
      name: "Disha Johari",
      rating: 4,
      review: "Excellent company ✨...best service provided",
      animationDirection: 'right'
    },
    {
      id: 5,
      name: "Surrender Jain",
      rating: 5,
      review: "Great people, satisfied with their service, they deliver their promises",
      animationDirection: 'left'
    },
    {
      id: 6,
      name: "Krishna Sharma",
      rating: 5,
      review: "Quick, efficient, and trustworthy. Tech Ember Solutions is my go-to for all tech needs.",
      animationDirection: 'right'
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0');
            setVisibleCards(prev => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -50px 0px'  }
    );

    cardRefs.current.forEach((ref) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
        if (ref.getBoundingClientRect().top < window.innerHeight && ref.getBoundingClientRect().bottom > 0) {
        const cardId = parseInt(ref.getAttribute('data-card-id') || '0');
        setVisibleCards(prev => new Set([...prev, cardId]));
      }
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-600'
        }`}
      />
    ));
  };

  const handleGoogleReviewClick = () => {
    // Replace with your actual Google Reviews URL
    window.open(' https://share.google/v3yOoS3MWuBU7Eoek ', '_blank');
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What Our Clients Say
            {/* <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent ml-3">
              Say
            </span> */}
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about their experience working with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              ref={(el) => cardRefs.current[index] = el}
              data-card-id={review.id}
              className={`
                transform transition-all duration-1000 ease-out
                ${visibleCards.has(review.id)
                  ? 'translate-x-0 opacity-100'
                  : review.animationDirection === 'left'
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
                }
              `}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="bg-gray-900 rounded-2xl p-6 h-full shadow-2xl border border-gray-800 hover:shadow-3xl hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-300">
                      {review.rating}.0
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-100 mb-6 leading-relaxed text-sm flex-grow">
                    "{review.review}"
                  </p>

                  {/* Reviewer Name */}
                  <div className="flex items-center mt-auto">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">
                        {review.name}
                      </p>
                      <p className="text-xs text-gray-400">Verified Customer</p>
                    </div>
                  </div>
                </div>

                {/* Hover gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button
            onClick={handleGoogleReviewClick}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black rounded-full hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            <span className="relative z-10">Leave a Review on Google</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            
            {/* Arrow animation */}
            <svg
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
          
          {/* Decorative elements */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;