import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceBackground3D from '@/components/ServiceBackground3D';

// Import service images
import webDevImage from '@/assets/web-development.jpg';
import appDevImage from '@/assets/app-development.jpg';
import graphicDesignImage from '@/assets/graphic-design.jpg';
import videoEditingImage from '@/assets/video-editing.jpg';
import digitalMarketingImage from '@/assets/digital-marketing.jpg';
import socialMediaImage from '@/assets/social-media.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Create stunning, responsive websites with modern technologies. From simple landing pages to complex web applications, we build digital experiences that engage users and drive business growth.',
      image: webDevImage,
      features: ['Responsive Design', 'Modern Technologies', 'SEO Optimized', 'Fast Performance'],
      direction: 'left'
    },
    {
      id: 2,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences. We develop iOS and Android apps that are intuitive, fast, and feature-rich.',
      image: appDevImage,
      features: ['iOS & Android', 'Cross-Platform', 'UI/UX Design', 'App Store Ready'],
      direction: 'right'
    },
    {
      id: 3,
      title: 'Graphic Design',
      description: 'Creative visual solutions that communicate your brand message effectively. From logos to marketing materials, we create designs that capture attention and leave lasting impressions.',
      image: graphicDesignImage,
      features: ['Brand Identity', 'Print Design', 'Digital Graphics', 'Creative Concepts'],
      direction: 'left'
    },
    {
      id: 4,
      title: 'Video Editing',
      description: 'Professional video editing services for marketing, educational, and entertainment content. We transform raw footage into compelling stories that engage your audience.',
      image: videoEditingImage,
      features: ['Motion Graphics', 'Color Grading', 'Sound Design', 'Multi-format Export'],
      direction: 'right'
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive conversions. From SEO to paid advertising, we help you reach your target audience effectively.',
      image: digitalMarketingImage,
      features: ['SEO/SEM', 'Content Marketing', 'PPC Campaigns', 'Analytics & Reports'],
      direction: 'left'
    },
    {
      id: 6,
      title: 'Social Media Marketing',
      description: 'Expert social media management that builds brand awareness and community engagement. We create compelling content and manage your social presence across all major platforms.',
      image: socialMediaImage,
      features: ['Content Creation', 'Community Management', 'Social Strategy', 'Influencer Outreach'],
      direction: 'right'
    }
  ];

  const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true,
    });

    const isLeft = service.direction === 'left';

    return (
      <motion.div
      id={service.title.toLowerCase().replace(/\s+/g, "-")}
        ref={ref}
        initial={{ 
          opacity: 0, 
          x: isLeft ? -100 : 100,
          y: 50 
        }}
        animate={inView ? { 
          opacity: 1, 
          x: 0,
          y: 0 
        } : {}}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.2,
          ease: 'easeOut' 
        }}
        className={`w-full max-w-6xl mx-auto mb-20 ${
          isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } flex flex-col lg:flex items-center gap-12`}
      >
        {/* Image Section */}
        <motion.div 
          className="flex-1 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="gradient-border overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-80 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--red-primary))] text-white mb-4">
              Service {service.id.toString().padStart(2, '0')}
            </span>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {service.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {service.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            className="grid grid-cols-2 gap-3"
          >
            {service.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.2 + featureIndex * 0.1 + 0.7 
                }}
                className="flex items-center space-x-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--red-primary))]" />
                <span className="text-sm font-medium text-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--red-primary))] text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300"
          >
            Learn More About {service.title}
          </motion.button> */}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <ServiceBackground3D />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white mb-6">
              Our Services
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Innovative <span className="bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--red-primary))] bg-clip-text text-black dark:text-white">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology services designed to transform your business and drive growth in the digital world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default Services;