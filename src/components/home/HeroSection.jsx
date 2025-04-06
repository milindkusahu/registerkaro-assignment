import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-(--color-tertiary) to-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--color-dark) mb-6 leading-tight">
              We take care of{" "}
              <span className="text-(--color-primary)">ALL</span> your business
              compliance needs
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various registrations, tax filings, and
              other legal matters.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline"
              >
                Explore Services
              </motion.button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col"
              >
                <span className="text-3xl md:text-4xl font-bold text-(--color-primary)">
                  20,000+
                </span>
                <span className="text-gray-600">Clients all over India</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col"
              >
                <span className="text-3xl md:text-4xl font-bold text-(--color-primary)">
                  500+
                </span>
                <span className="text-gray-600">
                  Businesses Incorporated Monthly
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col"
              >
                <span className="text-3xl md:text-4xl font-bold text-(--color-primary)">
                  250+
                </span>
                <span className="text-gray-600">Professionals Network</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-(--color-primary)/10 rounded-full z-0" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-(--color-primary)/10 rounded-full z-0" />

            <div className="relative z-10 bg-white p-4 rounded-3xl shadow-xl">
              <img
                src="/hero.png"
                alt="RegisterKaro Hero"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute top-8 -right-6 bg-white p-3 rounded-lg shadow-lg z-20"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-4 -left-6 bg-white p-3 rounded-lg shadow-lg z-20"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-(--color-primary) rounded-full"></div>
                <span className="text-sm font-medium">100% Secure</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="mt-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,10.7C1120,0,1280,0,1360,0L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
