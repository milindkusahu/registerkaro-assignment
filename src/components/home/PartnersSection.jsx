import { motion } from "framer-motion";

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

        {/* Partner logos marquee effect - first row */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 py-6 whitespace-nowrap animate-[marquee_25s_linear_infinite]">
            {/* First set of logos */}
            {partnerLogos.map((partner, index) => (
              <div
                key={`partner-1-${index}`}
                className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-auto object-contain"
                />
              </div>
            ))}

            {/* Duplicate set of logos to ensure continuous scrolling */}
            {partnerLogos.map((partner, index) => (
              <div
                key={`partner-1-duplicate-${index}`}
                className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partner logos marquee effect - second row (opposite direction) */}
        <div className="relative overflow-hidden mt-4">
          <div className="flex space-x-8 py-6 whitespace-nowrap animate-[marquee-reverse_30s_linear_infinite]">
            {/* Reversed array for visual variety */}
            {[...partnerLogos].reverse().map((partner, index) => (
              <div
                key={`partner-2-${index}`}
                className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-auto object-contain"
                />
              </div>
            ))}

            {/* Duplicate reversed set of logos */}
            {[...partnerLogos].reverse().map((partner, index) => (
              <div
                key={`partner-2-duplicate-${index}`}
                className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
