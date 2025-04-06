import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiLocationMarker,
  HiPhone,
  HiClock,
  HiMail,
  HiArrowRight,
} from "react-icons/hi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <section id="contact" className="section bg-[#F5F8FF]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-3xl md:text-4xl mb-4 inline-block relative">
            <span className="relative z-10">CONTACT US</span>
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#FF8A00]/20 rounded-full -z-10"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#FF8A00]/10 text-[#FF8A00] rounded-lg">
                <HiLocationMarker className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Main Office</h3>
                <p className="text-gray-600">
                  Safe Ledger Private Limited
                  <br />
                  #101, Oxford Towers, 139, HAL
                  <br />
                  Old Airport Rd, Kodihalli,
                  <br />
                  Bengaluru, Karnataka
                  <br />
                  560008
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#FF8A00]/10 text-[#FF8A00] rounded-lg">
                <HiPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Make a call</h3>
                <p className="text-gray-600">
                  <a
                    href="tel:+918447746183"
                    className="hover:text-[#FF8A00] transition-colors"
                  >
                    Phone: +91 8447746183
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#FF8A00]/10 text-[#FF8A00] rounded-lg">
                <HiClock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                <p className="text-gray-600">
                  Monday-Friday: 9:00 - 18:00
                  <br />
                  Saturday-Sunday: Holiday
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#FF8A00]/10 text-[#FF8A00] rounded-lg">
                <HiMail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Send an email</h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:support@registerkaro.in"
                    className="hover:text-[#FF8A00] transition-colors"
                  >
                    support@registerkaro.in
                  </a>
                  <br />
                  <a
                    href="mailto:admin@registerkaro.in"
                    className="hover:text-[#FF8A00] transition-colors"
                  >
                    admin@registerkaro.in
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>

              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary flex justify-center items-center px-4 py-3 rounded-lg"
              >
                Send Now <HiArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
