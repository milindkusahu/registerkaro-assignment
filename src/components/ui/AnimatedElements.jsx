import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AnimatedHeading = ({
  children,
  highlight = false,
  delay = 0,
  className = "",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`text-3xl md:text-4xl font-bold mb-4 inline-block relative ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {highlight && (
        <motion.span
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          className="absolute -bottom-2 left-0 h-3 bg-[#FF8A00]/20 rounded-full -z-10"
        ></motion.span>
      )}
    </motion.h2>
  );
};

export const AnimatedText = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`${className}`}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedCard = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 35px -10px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ duration: 0.3 }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedButton = ({ children, className = "", onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export const StaggeredList = ({ children, staggerDelay = 0.1, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

export const StaggeredItem = ({ children, className = "" }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export const AnimatedCounter = ({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className = "",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );
        const currentCount = Math.floor(progress * (to - from) + from);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(to);
        }
      };

      const startAnimation = () => {
        requestAnimationFrame(animateCount);
      };

      const timer = setTimeout(startAnimation, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [controls, inView, from, to, duration, delay]);

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay },
    },
  };

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {count}
    </motion.span>
  );
};
