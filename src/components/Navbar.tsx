import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: 'Website Development', href: '/services/website-development' },
    { name: 'App Development', href: '/services/app-development' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Social Media Marketing', href: '/services/social-media' },
    { name: 'Video Editing', href: '/services/video-editing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-primary"
            >
              Techember Solutions
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                Home
              </a>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center">
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg py-2"
                    >
                      {services.map((service, index) => (
                        <motion.a
                          key={service.name}
                          href={service.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                        >
                          {service.name}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="/about" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                About
              </a>
              
              <a href="/contact" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-200">
                Home
              </a>
              
              <div className="px-3 py-2">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center w-full text-left text-card-foreground hover:text-accent-foreground transition-colors duration-200"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 ml-4 space-y-1"
                    >
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block py-1 text-sm text-muted-foreground hover:text-card-foreground transition-colors duration-200"
                        >
                          {service.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <a href="/about" className="block px-3 py-2 text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-200">
                About
              </a>
              
              <a href="/contact" className="block px-3 py-2 text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;