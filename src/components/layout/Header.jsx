import { useState } from "react";
import { HiOutlineMenuAlt3, HiPhone, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="RegisterKaro Logo" className="h-9" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link font-medium">
              Home
            </a>
            <a href="#services" className="nav-link font-medium">
              Services
            </a>
            <a href="#about" className="nav-link font-medium">
              About Us
            </a>
            <a href="#blog" className="nav-link font-medium">
              Blog
            </a>
            <a href="#contact" className="nav-link font-medium">
              Contact
            </a>
            <button className="btn btn-primary flex items-center justify-center">
              <HiPhone className="mr-2 w-4 h-4" /> +91 8447746183
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-(--color-dark) hover:text-(--color-primary)"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 md:hidden"
        >
          <div className="container flex flex-col space-y-4">
            <a href="#" className="nav-link font-medium">
              Home
            </a>
            <a href="#services" className="nav-link font-medium">
              Services
            </a>
            <a href="#about" className="nav-link font-medium">
              About Us
            </a>
            <a href="#blog" className="nav-link font-medium">
              Blog
            </a>
            <a href="#contact" className="nav-link font-medium">
              Contact
            </a>
            <button className="btn btn-primary flex items-center justify-center">
              <HiPhone className="mr-2 w-4 h-4" /> +91 8447746183
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
