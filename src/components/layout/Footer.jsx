import { HiLocationMarker, HiPhone, HiClock, HiMail } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Info */}
          <div>
            <img src="/logo.png" alt="RegisterKaro Logo" className="h-8 mb-6" />
            <p className="mb-6 text-gray-300">
              As a leading technology-driven legal services and advisory firm,
              we empower SMEs and entrepreneurs on their business journey.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: Start a Business */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Start a Business</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Private Limited Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Limited Liability Partnership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  One Person Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Section 8 Company Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  MSME Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Compliance & Tax */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Compliance & Tax</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  GST Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Compliance Pvt Ltd
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Compliance LLP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Trademark Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  FSSAI Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <HiLocationMarker className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Safe Ledger Private Limited
                  <br />
                  #101, Oxford Towers, 139, HAL
                  <br />
                  Old Airport Rd, Kodihalli,
                  <br />
                  Bengaluru, Karnataka
                  <br />
                  560008
                </span>
              </li>
              <li className="flex items-center">
                <HiPhone className="w-5 h-5 text-primary mr-3" />
                <a
                  href="tel:+918447746183"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  +91 8447746183
                </a>
              </li>
              <li className="flex items-center">
                <HiMail className="w-5 h-5 text-primary mr-3" />
                <a
                  href="mailto:support@registerkaro.in"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  support@registerkaro.in
                </a>
              </li>
              <li className="flex">
                <HiClock className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Monday-Friday: 9:00 - 18:00
                  <br />
                  Saturday-Sunday: Holiday
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-dark-light py-4">
        <div className="container text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 - Safe Ledger Private Limited. All rights reserved.</p>
          <div className="flex mt-2 md:mt-0">
            <a href="#" className="mx-2 hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="mx-2 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="mx-2 hover:text-primary transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
