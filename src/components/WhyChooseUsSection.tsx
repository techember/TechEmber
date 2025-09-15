import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Zap, Users, Award, Clock, Target } from 'lucide-react';

const WhyChooseUsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const reasons = [
    {
      icon: Shield,
      title: 'Reliable & Secure',
      description: 'Enterprise-grade security and reliability in every solution we deliver.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance and quick turnaround times for all projects.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience in cutting-edge technologies.',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes ensure exceptional results.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and maintenance for peace of mind.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on achieving your business objectives and driving growth.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Techember</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine innovation, expertise, and dedication to deliver exceptional results that exceed expectations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full card-hover overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full opacity-20"
                        animate={{
                          x: [0, 100, 0],
                          y: [0, -50, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={inView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        delay: index * 0.1 + 0.3, 
                        type: 'spring', 
                        stiffness: 200 
                      }}
                      className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg"
                    >
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {reason.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>

                    {/* Decorative Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: '100%' } : {}}
                      transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
                      className="mt-6 h-0.5 bg-gradient-to-r from-primary to-transparent"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-8">
            Ready to experience the Techember difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">
              Start Your Project
            </button>
            <button className="btn-hero-outline">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;