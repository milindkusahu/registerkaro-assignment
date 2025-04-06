import { motion } from "framer-motion";
import { FiShield, FiUsers, FiAward } from "react-icons/fi";

const partnerLogos = [
  {
    name: "Adobe",
    logo: "https://www.registerkaro.in/_next/static/media/adobe.25107b8b.png",
  },
  {
    name: "Amazon",
    logo: "https://www.registerkaro.in/_next/static/media/amazon.e8d0a73a.png",
  },
  {
    name: "AMD",
    logo: "https://www.registerkaro.in/_next/static/media/amd.913b593b.png",
  },
  {
    name: "Dell",
    logo: "https://www.registerkaro.in/_next/static/media/dell.9cb7b1ca.png",
  },
  {
    name: "Google",
    logo: "https://www.registerkaro.in/_next/static/media/google.19d46065.png",
  },
  {
    name: "HP",
    logo: "https://www.registerkaro.in/_next/static/media/hp.34d5931f.png",
  },
  {
    name: "Huawei",
    logo: "https://www.registerkaro.in/_next/static/media/huawei.6e3fb062.png",
  },
  {
    name: "Lee",
    logo: "https://www.registerkaro.in/_next/static/media/lee.96fb08d5.png",
  },
  {
    name: "McDonald's",
    logo: "https://www.registerkaro.in/_next/static/media/mcDonald.43902f76.png",
  },
  {
    name: "Microsoft",
    logo: "https://www.registerkaro.in/_next/static/media/google.19d46065.png",
  },
  {
    name: "Target",
    logo: "https://www.registerkaro.in/_next/static/media/target.371100f3.png",
  },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-(--color-tertiary)">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We <span className="text-(--color-primary)">partner</span> with the
            best,
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            so that your business can flow{" "}
            <span className="text-(--color-primary)">seamlessly</span>.
          </p>
          <p className="text-gray-600">
            Your Business needs numerous expertise and that's why we are
            providing you the best services with the best names in the field.
          </p>
        </motion.div>

        {/* Key partnership benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-md text-center"
          >
            <div className="mx-auto mb-4 w-16 h-16 bg-(--color-primary)/10 rounded-full flex items-center justify-center text-(--color-primary)">
              <FiShield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted Partners</h3>
            <p className="text-gray-600">
              We collaborate only with industry leaders who maintain the highest
              standards of quality and reliability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-md text-center"
          >
            <div className="mx-auto mb-4 w-16 h-16 bg-(--color-primary)/10 rounded-full flex items-center justify-center text-(--color-primary)">
              <FiUsers className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Network</h3>
            <p className="text-gray-600">
              Access to our extensive network of international partners helps
              your business expand beyond borders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-md text-center"
          >
            <div className="mx-auto mb-4 w-16 h-16 bg-(--color-primary)/10 rounded-full flex items-center justify-center text-(--color-primary)">
              <FiAward className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence Assured</h3>
            <p className="text-gray-600">
              Our partnerships are built on a foundation of excellence, ensuring
              top-tier service for your business.
            </p>
          </motion.div>
        </div>

        {/* Partner logos marquee effect - first row */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-(--color-tertiary) via-transparent to-(--color-tertiary) z-10 pointer-events-none"></div>
          <div className="flex space-x-8 py-6 px-4 whitespace-nowrap animate-[marquee_25s_linear_infinite] bg-white/80 backdrop-blur-sm">
            {/* First set of logos */}
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={`partner-1-${index}`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0 hover:shadow-lg"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-auto object-contain"
                />
              </motion.div>
            ))}

            {/* Duplicate set of logos to ensure continuous scrolling */}
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={`partner-1-duplicate-${index}`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0 hover:shadow-lg"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden mt-8 rounded-xl shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-(--color-tertiary) via-transparent to-(--color-tertiary) z-10 pointer-events-none"></div>
          <div className="flex space-x-8 py-6 px-4 whitespace-nowrap animate-[marquee-reverse_30s_linear_infinite] bg-white/80 backdrop-blur-sm">
            {[...partnerLogos].reverse().map((partner, index) => (
              <motion.div
                key={`partner-2-${index}`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0 hover:shadow-lg"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-auto object-contain"
                />
              </motion.div>
            ))}

            {[...partnerLogos].reverse().map((partner, index) => (
              <motion.div
                key={`partner-2-duplicate-${index}`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0 hover:shadow-lg"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
