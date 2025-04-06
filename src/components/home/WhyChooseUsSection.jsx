import { motion } from "framer-motion";
import {
  HiCurrencyDollar,
  HiShieldCheck,
  HiLightningBolt,
  HiClock,
  HiChat,
  HiUserGroup,
} from "react-icons/hi";

const FeatureCard = ({ icon, title, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-start space-x-4 group"
    >
      <div className="p-3 bg-[#F5F8FF] text-[#FF8A00] rounded-lg group-hover:bg-[#FF8A00] group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#FF8A00] transition-colors duration-300">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <HiCurrencyDollar className="w-6 h-6" />,
      title: "Affordable",
      delay: 0.1,
    },
    {
      icon: <HiShieldCheck className="w-6 h-6" />,
      title: "Compliance Ensured",
      delay: 0.2,
    },
    {
      icon: <HiLightningBolt className="w-6 h-6" />,
      title: "Simplified Process",
      delay: 0.3,
    },
    {
      icon: <HiClock className="w-6 h-6" />,
      title: "On-time Service",
      delay: 0.4,
    },
    {
      icon: <HiChat className="w-6 h-6" />,
      title: "Instant Response",
      delay: 0.5,
    },
    {
      icon: <HiUserGroup className="w-6 h-6" />,
      title: "Industry Experts",
      delay: 0.6,
    },
  ];

  return (
    <section id="why-us" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-3xl md:text-4xl mb-4 inline-block relative">
            <span className="relative z-10">WHY CHOOSE US</span>
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#FF8A00]/20 rounded-full -z-10"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our All-In-One Platform And Team Of Experts Will Help Direct You In
            The Right Path And Ensure That Your Business Starts The Right Way In
            Record Time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-[#F5F8FF] rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">
                  Receive support at every stage of business development.
                </h3>
                <p className="text-gray-600 mb-8">
                  Launch, grow and scale with ease. Each of our clients has a
                  dedicated team that is committed to answering all queries
                  within 24 hours, so you can rely on our helpful and
                  professional support throughout your business journey.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary px-4 py-3 rounded-lg"
                  >
                    Popular Services
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline px-4 py-3 rounded-lg"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
              <div className="bg-white p-6 flex items-center justify-center">
                <div className="relative">
                  <img
                    src="/business-support.png"
                    alt="Business Support"
                    className="rounded-lg max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
