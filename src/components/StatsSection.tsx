import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users, Package, Handshake, Star } from 'lucide-react';

const StatsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    {
      icon: Package,
      number: 100,
      label: 'Orders Completed',
      suffix: '+',
    },
    {
      icon: Users,
      number: 50,
      label: 'Team Members',
      suffix: '+',
    },
    {
      icon: Handshake,
      number: 100,
      label: 'Partners',
      suffix: '+',
    },
    {
      icon: Star,
      number: 5,
      label: 'Core Team',
      suffix: '',
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
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and client satisfaction
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 text-center card-hover relative overflow-hidden">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                      className="w-16 h-16 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>

                    <div className="counter mb-2">
                      {inView && (
                        <CountUp
                          end={stat.number}
                          duration={2.5}
                          delay={index * 0.2}
                          suffix={stat.suffix}
                        />
                      )}
                    </div>

                    <p className="text-muted-foreground font-medium text-lg">
                      {stat.label}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-50" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary rounded-full opacity-30" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;