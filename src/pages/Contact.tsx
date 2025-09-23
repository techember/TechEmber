import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, User, FileText, CheckCircle } from 'lucide-react';
// import emailjs from '@emailjs/browser'
const Contact = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [formRef, formInView] = useInView({ threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ threshold: 0.1 });
  // const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // try{
    //   await emailjs.sendForm(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_ID,
    //   )
    //   setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value
    // });
    // }catch(error){
    //   console.error("Error sending email:", error);
    // }
    // finally{
    //   setIsSubmitting(false);
    // }
    

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open email client with pre-filled data
    const mailtoLink = `mailto:techembersolutions@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "Info@techember.in",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+919343789798",
      description: "Mon-Sat from 10am to 8pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "1st Floor Pushpraj Annexe, Morar, Gwalior (M.P.), India",
      description: "Come visit our office"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon-Sat: 10AM - 8PM",
      description: "Weekend consultations available"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Contact us"
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
              Contact{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ready to start your digital transformation journey? Let's discuss how we can 
              bring your vision to life with innovative solutions.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-red-600"
            >
              <div className="bg-white rounded-full px-8 py-4">
                <span className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Get In Touch Today
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-orange-500 to-red-600 opacity-5 animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-red-500 to-orange-500 opacity-5 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                  Send Us a{' '}
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>
                <p className="text-lg text-gray-700">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-orange-600 transition-colors" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-orange-600 transition-colors" />
                  <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300"
                  required
                  disabled={isSubmitting}
                  />
                  </div>
                  
                </div>
                <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-orange-600 transition-colors" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                <div className="relative group">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-orange-600 transition-colors" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="relative group">
                  <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-500 group-focus-within:text-orange-600 transition-colors" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={6}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  disabled={isSubmitting}
                  className={`relative w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 group overflow-hidden ${
                    isSubmitted 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-black hover:shadow-2xl hover:shadow-orange-500/50'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent Successfully!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                  {!isSubmitting && !isSubmitted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                  Get In{' '}
                  <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
                    Touch
                  </span>
                </h2>
                <p className="text-lg text-gray-700">
                  We're here to help you succeed. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={infoInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    className="group"
                  >
                    <div className="relative p-6 rounded-xl bg-white border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                      
                      <div className="relative z-10 flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-black text-white group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1 text-black">{info.title}</h3>
                          <p className="text-lg font-semibold text-black mb-1">{info.content}</p>
                          <p className="text-gray-700">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              {/* <motion.a
  href="https://maps.app.goo.gl/sPfQDgpdZ4NYZwpe8?g_st=aw"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={infoInView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="relative block h-64 bg-white border border-gray-200 rounded-xl overflow-hidden group"
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.310245095071!2d78.22700747441456!3d26.219107089555465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25af3454b147dd97%3A0xce9cdd66385314fa!2sTech%20Ember%20Solutions!5e0!3m2!1sen!2sin!4v1758372026591!5m2!1sen!2sin"
    className="absolute inset-0 w-full h-full rounded-xl pointer-events-none"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe> */}

  {/* Hover Overlay */}
  {/* <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
    <div className="text-center space-y-2">
      <MapPin className="w-12 h-12 mx-auto text-orange-600" />
      <p className="text-lg font-semibold text-black">Our Location</p>
    </div>
  </div>
</motion.a> */}

            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-700">
              Quick answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity, but most websites take 2-4 weeks, while apps can take 6-12 weeks."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive maintenance and support packages to keep your digital solutions running smoothly."
              },
              {
                question: "What's your design process like?",
                answer: "We follow a collaborative approach: discovery, wireframing, design, development, testing, and launch."
              },
              {
                question: "Can you work with our existing brand?",
                answer: "Absolutely! We can adapt our designs to match your existing brand guidelines and visual identity."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-6 rounded-xl bg-white border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  
                  <div className="relative z-10 space-y-3">
                    <h3 className="text-xl font-bold text-black">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gray-50">
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
                Get Started?
              </span>
            </h2>
            
            <p className="text-xl text-gray-700">
              Let's discuss your project and explore how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-transparent border-2 border-gray-300 rounded-full hover:border-orange-500 transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;