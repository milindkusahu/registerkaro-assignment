import { HiArrowRight, HiCalendar, HiUser } from "react-icons/hi";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "What is a Sole Proprietorship? Everything You Need to Know",
    excerpt:
      "Understanding the basics of sole proprietorship and its advantages for small business owners.",
    image:
      "https://www.registerkaro.in/wordpress/wp-content/uploads/2025/03/partnership-firm-name.webp",
    date: "March 28, 2023",
    author: "Jai Raj",
    category: "Business Formation",
  },
  {
    id: 2,
    title: "Punishable Offences Under FSSAI: Know the Rules",
    excerpt:
      "Learn about the penalties and violations under Food Safety and Standards Authority of India (FSSAI) regulations.",
    image:
      "https://www.registerkaro.in/wordpress/wp-content/uploads/2025/03/FSSAI-Violations.png",
    date: "April 03, 2023",
    author: "Jai Raj",
    category: "Compliance",
  },
  {
    id: 3,
    title: "BIS certification for Medical devices: A step-by-step guide",
    excerpt:
      "Comprehensive guide to obtaining Bureau of Indian Standards (BIS) certification for medical devices in India.",
    image:
      "https://www.registerkaro.in/wordpress/wp-content/uploads/2025/04/BIS-certification-for-Medical-devices.png",
    date: "April 03, 2023",
    author: "Shagun V Singh",
    category: "Certification",
  },
];

const BlogCard = ({ post, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className="card h-full flex flex-col overflow-hidden">
        {/* Image Container */}
        <div className="overflow-hidden rounded-lg mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-semibold mb-4 group-hover:text-[#FF8A00] transition-colors duration-300">
            {post.title}
          </h3>

          <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>

          <div className="mt-auto">
            {/* Meta info */}
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <div className="flex items-center mr-4">
                <HiCalendar className="mr-1 w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <HiUser className="mr-1 w-4 h-4" />
                <span>Written by {post.author}</span>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center font-medium text-[#FF8A00] hover:text-[#E67A00] transition-colors duration-300"
            >
              Read More <HiArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BlogSection = () => {
  return (
    <section id="blog" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-3xl md:text-4xl mb-4 inline-block relative">
            <span className="relative z-10">LATEST BLOG</span>
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#FF8A00]/20 rounded-full -z-10"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and information in business
            compliance, legal matters, and entrepreneurship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} delay={0.1 * (index + 1)} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="btn-outline inline-flex items-center px-4 py-3 rounded-lg"
          >
            View All Posts <HiArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
