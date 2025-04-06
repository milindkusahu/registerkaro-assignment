import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiOfficeBuilding,
  HiDocumentText,
  HiGlobe,
  HiClipboardCheck,
  HiDocumentDuplicate,
  HiCash,
  HiCalculator,
  HiAcademicCap,
} from "react-icons/hi";
import { FiShield, FiTarget, FiTrendingUp } from "react-icons/fi";

const ServiceCard = ({ icon, title, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card h-full flex flex-col items-center text-center p-8 group-hover:border-(--color-primary) group-hover:border transition-all duration-300">
        <div className="mb-6 p-4 bg-(--color-tertiary) text-(--color-secondary) rounded-xl group-hover:bg-(--color-primary)/10 group-hover:text-(--color-primary) transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-(--color-primary) transition-colors duration-300">
          {title}
        </h3>

        <motion.div
          className="mt-auto pt-4"
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <button className="text-(--color-primary) font-medium inline-flex items-center">
            Learn More <HiArrowRight className="ml-2 w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <HiOfficeBuilding className="w-8 h-8" />,
      title: "Company Formation",
      delay: 0.1,
    },
    {
      icon: <HiDocumentText className="w-8 h-8" />,
      title: "Company Secretarial Services",
      delay: 0.2,
    },
    {
      icon: <HiGlobe className="w-8 h-8" />,
      title: "Virtual Office Address",
      delay: 0.3,
    },
    {
      icon: <HiClipboardCheck className="w-8 h-8" />,
      title: "Annual Compliance Services",
      delay: 0.4,
    },
    {
      icon: <HiDocumentDuplicate className="w-8 h-8" />,
      title: "VAT Registration, Preparation & Filing",
      delay: 0.5,
    },
    {
      icon: <HiCash className="w-8 h-8" />,
      title: "Payroll Services",
      delay: 0.6,
    },
    {
      icon: <HiCalculator className="w-8 h-8" />,
      title: "Bookkeeping Services",
      delay: 0.7,
    },
    {
      icon: <HiAcademicCap className="w-8 h-8" />,
      title: "Live Online Webinars & Workshops",
      delay: 0.8,
    },
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-3xl md:text-4xl mb-4 inline-block relative">
            <span className="relative z-10">OUR SERVICES</span>
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-(--color-primary)/20 rounded-full -z-10"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our Client Services Team is always happy to talk to you about what
            is best for your needs. Contact our team to find out if we are the
            right fit for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="#" className="btn btn-primary inline-flex items-center">
            Explore our services <HiArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>

        {/* Service advantages */}
        <div className="mt-24 bg-(--color-tertiary) rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-white p-4 rounded-full shadow-md text-(--color-primary) mb-4">
                <FiShield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Full Compliance Protection
              </h3>
              <p className="text-gray-600">
                Our services ensure your business stays fully compliant with all
                relevant regulations and legal requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-white p-4 rounded-full shadow-md text-(--color-primary) mb-4">
                <FiTarget className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Focused Expertise</h3>
              <p className="text-gray-600">
                Each service is backed by specialists with deep domain knowledge
                who focus exclusively on their area of expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-white p-4 rounded-full shadow-md text-(--color-primary) mb-4">
                <FiTrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Business Growth Support
              </h3>
              <p className="text-gray-600">
                Our comprehensive service suite is designed to remove obstacles
                and create clear pathways for your business growth.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
