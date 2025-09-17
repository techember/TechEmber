import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    'IDL Software', 'General Transport', 'TRI-NEX', 'Imogen Cars', 'BillBank', 'PinPay', "AadyaPay", "Shriji Hostel"
  ];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to work with some of the world's most innovative companies
          </p>
        </motion.div>

        {/* Scrolling Partners */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex">
            <motion.div
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              className="flex space-x-16 items-center"
            >
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-card border border-border rounded-xl px-8 py-6 hover:bg-accent transition-colors duration-300 min-w-[200px] text-center">
                    <span className="text-lg font-semibold text-card-foreground group-hover:text-accent-foreground transition-colors duration-300">
                      {partner}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-card border border-border rounded-xl px-8 py-6 hover:bg-accent transition-colors duration-300 min-w-[200px] text-center">
                    <span className="text-lg font-semibold text-card-foreground group-hover:text-accent-foreground transition-colors duration-300">
                      {partner}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Ready to join our network of successful partners?
          </p>
          <button className="btn-hero">
            Become a Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;