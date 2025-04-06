import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    name: "Trinity Finserv LLP",
    message:
      "Great experience to have associated with REGISTER KARO team. All documentations for registration was done online with prompt updates. Thanks to entire team, especially Priyanka mam for personally updating me and Himanshi for coordinating. Thank you!",
    image: "/path/to/avatar1.jpg",
    rating: 5,
    platform: "Google",
    platformLogo:
      "https://www.registerkaro.in/_next/static/media/google.19d46065.png",
  },
  {
    id: 2,
    name: "Aakash Sharma",
    message:
      "RegisterKaro has been a game-changer for my startup journey. Their team guided me through the entire company formation process with ease. The online platform is intuitive, and their customer service is exceptional.",
    image: "/path/to/avatar2.jpg",
    rating: 5,
    platform: "Huawei",
    platformLogo:
      "https://www.registerkaro.in/_next/static/media/huawei.6e3fb062.png",
  },
  {
    id: 3,
    name: "Priya Mehta",
    message:
      "I was struggling with GST registration compliance until I found RegisterKaro. Their expertise and prompt service helped me navigate the complex tax regulations. Highly recommend their services to all entrepreneurs!",
    image: "/path/to/avatar3.jpg",
    rating: 4,
    platform: "HP",
    platformLogo:
      "https://www.registerkaro.in/_next/static/media/hp.34d5931f.png",
  },
  {
    id: 4,
    name: "Vikram Singh",
    message:
      "The team at RegisterKaro is professional and knowledgeable. They handled my trademark registration efficiently, saving me time and unnecessary stress. Their attention to detail is commendable.",
    image: "/path/to/avatar4.jpg",
    rating: 5,
    platform: "AMD",
    platformLogo:
      "https://www.registerkaro.in/_next/static/media/amd.913b593b.png",
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className={`p-8 bg-white rounded-xl shadow-lg transform transition-all duration-300 ${
        isActive ? "scale-100 z-20" : "scale-95 opacity-50"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
            {/* Avatar placeholder */}
            <div className="w-full h-full bg-[#FF8A00]/20 flex items-center justify-center text-[#FF8A00] font-bold">
              {testimonial.name.charAt(0)}
            </div>
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-lg">{testimonial.name}</h3>
            <div className="flex items-center mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <HiStar key={i} className="w-4 h-4 text-yellow-400" />
              ))}
              {[...Array(5 - testimonial.rating)].map((_, i) => (
                <HiStar
                  key={i + testimonial.rating}
                  className="w-4 h-4 text-gray-300"
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <img
            src={testimonial.platformLogo}
            alt={testimonial.platform}
            className="h-10"
          />
        </div>
      </div>
      <p className="text-gray-600 italic">{testimonial.message}</p>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setAutoplay(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setAutoplay(false);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setAutoplay(false);
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, testimonials.length]);

  return (
    <section className="section bg-[#F5F8FF]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-3xl md:text-4xl mb-4 inline-block relative">
            <span className="relative z-10">Hear What Our Customers</span>
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#FF8A00]/20 rounded-full -z-10"></span>
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have To Say</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600">
              <span className="font-heading text-[#195385]">RegisterKaro</span>{" "}
              is used by tens of thousands of founders to start, manage, and
              grow their business
            </p>
            <p className="text-3xl font-bold text-[#FF8A00] mt-4">20,000+</p>
            <p className="text-xl text-gray-600">Happy Customers</p>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are one of India's highest rated service provider, we are known
            for completing Business Incorporations and other compliance services
            in record time, don't have to believe us, read it by yourselves
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden px-4">
            <div className="flex items-center justify-center">
              <TestimonialCard
                testimonial={testimonials[activeIndex]}
                isActive={true}
              />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md text-[#FF8A00] hover:bg-[#FF8A00] hover:text-white transition-colors duration-300"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-8 bg-[#FF8A00]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md text-[#FF8A00] hover:bg-[#FF8A00] hover:text-white transition-colors duration-300"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
