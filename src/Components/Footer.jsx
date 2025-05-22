import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLeaf,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3 text-sm">
        {/* Website Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaLeaf className="text-green-600 text-2xl" />
            <h2 className="text-2xl font-bold text-green-400 mb-3">Ninja</h2>
          </div>
          <p className="text-gray-300">
            Your trusted platform for plant lovers and care-takers. Grow with
            us!
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="flex items-center gap-2 text-gray-300 mb-1">
            <FaEnvelope className="text-green-400" />
            <span>support@ninjauser.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 mb-1">
            <FaPhone className="text-green-400" />
            <span>+1 (234) 567-8901</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <FaMapMarkerAlt className="text-green-400" />
            <span>123 Plant Lane, Green City</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-green-400 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © 2025 Ninja User. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
