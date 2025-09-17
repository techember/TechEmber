import { motion } from 'framer-motion';
import Hero3D from './Hero3D';
import { useNavigate } from 'react-router-dom';  


const HeroSection = () => {
    const navigate = useNavigate();
     const handleViewWork = () => {
        navigate('/viewWork');  // Change from router.push to navigate
    };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-gradient">Tech</span>
              <span className="text-primary">Ember</span>
              <br />
              <span className="text-foreground">Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-black font-semibold md:text-md text-muted-foreground mb-8 max-w-lg"
            >
              Empowering businesses with cutting-edge technology solutions. 
              From web development to digital marketing, we bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="btn-hero">
                Get Started
              </button>
           <button 
        onClick={handleViewWork} 
        className="btn-hero-outline"
      >
        View Our Work
      </button>
            </motion.div>
          </motion.div>

          {/* Right 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-96 lg:h-[600px] relative"
          >
            <Hero3D />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 right-10 bg-card border border-border rounded-lg p-4 shadow-lg"
            >
              <div className="text-sm font-semibold text-primary">100+</div>
              <div className="text-xs text-muted-foreground">Projects Done</div>
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-10 bg-card border border-border rounded-lg p-4 shadow-lg"
            >
              <div className="text-sm font-semibold text-primary">High</div>
              <div className="text-xs text-muted-foreground">Quality results</div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -34, 7],
                rotate: [0, 9, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-20 right-20 bg-card border border-border rounded-lg p-4 shadow-lg"
            >
              <div className="text-sm font-semibold text-primary">100+</div>
              <div className="text-xs text-muted-foreground">Partners</div>
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, 25, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-20 left-10 bg-card border border-border rounded-lg p-4 shadow-lg"
            >
              <div className="text-sm font-semibold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">Support</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;