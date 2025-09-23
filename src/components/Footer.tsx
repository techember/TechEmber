import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
  const services = [
    'Website Development',
    'App Development',
    'Digital Marketing',
    'Social Media Marketing',
    'Video Editing',
    'Graphic Designing',
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    // { name: 'Privacy Policy', href: '/privacy' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/17FDc1cre9/', label: 'Facebook' },
    // { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: FaXTwitter, href: 'https://x.com/TechEmberS63732?t=RNj_UY8tnxFILGnmjK1fhA&s=09', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/tech_ember?igsh=MTF0OWJqY2g3YjVrZg%3D%3D', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/tech-ember-solutions/', label: 'LinkedIn' },
  ];

  return (
    <footer id="footer" className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold mb-4">TechEmber Solutions</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Empowering businesses with cutting-edge technology solutions. 
                We transform ideas into digital reality.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-10 h-10 mr-3 text-primary-foreground/60" />
                  <span className="text-primary-foreground/80">1st Floor Pushpraj Annexe, Morar, Gwalior, Madhya Pradesh</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary-foreground/60" />
                  <span className="text-primary-foreground/80">+919343789798</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-3 text-primary-foreground/60" />
                  <span className="text-primary-foreground/80">www.techember.in</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary-foreground/60" />
                  <span className="text-primary-foreground/80">Info@techember.in</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
  {services.map((service, index) => (
    <motion.li
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 + 0.2 }}
      viewport={{ once: true }}
    >
      <Link 
        to="/services"
        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 hover:translate-x-1 inline-block"
      >
        {service}
      </Link>
    </motion.li>
  ))}
</ul>

            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
              {/* <p className="text-primary-foreground/80 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p> */}
              
              {/* <div className="flex mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-primary-foreground text-primary border-none focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
                />
                <button className="px-6 py-2 bg-primary-foreground text-primary rounded-r-lg hover:bg-primary-foreground/90 transition-colors duration-200 font-medium">
                  Subscribe
                </button>
              </div> */}

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.4, type: 'spring', stiffness: 200 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-all duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 py-6"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-primary-foreground/80 text-sm">
                © {new Date().getFullYear()} TechEmber Solutions. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/term" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200">   
                Privacy Policy
              </Link>

                {/* <a href="/cookies" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200">
                  Cookie Policy
                </a> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;