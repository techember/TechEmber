import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, TrendingUp, Share2, Video } from 'lucide-react';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure'],
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Ready'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and conversions.',
      features: ['SEO/SEM', 'Content Marketing', 'Email Campaigns', 'Analytics'],
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Engaging social media campaigns that build brand awareness and community engagement.',
      features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Influencer Outreach'],
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services for marketing, educational, and entertainment content.',
      features: ['Motion Graphics', 'Color Grading', 'Sound Design', 'Multi-format Export'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your business needs and drive growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full card-hover relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className="w-full h-full" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={inView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        delay: index * 0.1 + 0.3, 
                        type: 'spring', 
                        stiffness: 200,
                        damping: 15 
                      }}
                      className="w-16 h-16 mb-6 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    >
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 + featureIndex * 0.1 + 0.5 }}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full py-3 px-6 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;