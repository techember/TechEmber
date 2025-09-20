import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Award, Lightbulb, Handshake, Zap } from 'lucide-react';

const About = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ threshold: 0.1 });

  const values = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We build lasting relationships through exceptional service and results."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that drive your business forward."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "Every project is crafted with precision, attention to detail, and commitment to the highest standards."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agile Delivery",
      description: "Fast, efficient, and flexible processes that adapt to your needs and deliver results on time."
    }
  ];

  const team = [
    {
      name: "Creative Visionaries",
      role: "Design & Strategy",
      description: "Our creative minds turn ideas into compelling visual experiences that resonate with your audience."
    },
    {
      name: "Technical Experts",
      role: "Development & Engineering",
      description: "Skilled developers and engineers who bring concepts to life with robust, scalable solutions."
    },
    {
      name: "Growth Specialists",
      role: "Marketing & Analytics",
      description: "Data-driven marketers who amplify your brand presence and drive measurable business growth."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-orange-100/30 z-[2]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-black">
              About{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Techember
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We are passionate innovators dedicated to transforming businesses through 
              cutting-edge technology solutions and creative excellence.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-red-600"
            >
              <div className="bg-white rounded-full px-8 py-4">
                <span className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Crafting Digital Excellence Since 2025
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-orange-500 to-red-600 opacity-5 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-red-500 to-orange-500 opacity-5 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-black">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">Our Mission</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting value. We believe technology 
                should be accessible, powerful, and transformative.
              </p>
              
              <div className="w-24 h-1 bg-black rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-black">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">Our Vision</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading digital transformation partner, recognized for our 
                creativity, technical excellence, and unwavering commitment to client success. 
                We envision a future where every business thrives in the digital landscape.
              </p>
              
              <div className="w-24 h-1 bg-black rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Our{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  
                  <div className="relative z-10 space-y-4 text-center">
                    <div className="inline-flex items-center justify-center p-4 rounded-full bg-black text-white group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-black">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
                Expert Teams
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Talented professionals working together to deliver exceptional results for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  
                  <div className="relative z-10 space-y-6 text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-black flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-black">{member.name}</h3>
                      <p className="text-orange-600 font-semibold mb-4">{member.role}</p>
                      <p className="text-gray-700 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Ready to{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Transform
              </span>{' '}
              Your Business?
            </h2>
            
            <p className="text-xl text-gray-700">
              Let's work together to bring your vision to life with innovative solutions 
              that drive real results.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-black rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;