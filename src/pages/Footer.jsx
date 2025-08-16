import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-amber-50  py-10 text-green-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Amrutam</h3>
          <p className="text-sm ">
            Amrutam is a holistic wellness brand rooted in Ayurvedic principles,
            offering natural products and doctor consultations to help you live a better, healthier life.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm ">
            <li><a href="/" className="hover:text-amber-400">Home</a></li>
            <li><a href="/about" className="hover:text-amber-400">About</a></li>
            <li><a href="/products" className="hover:text-amber-400">Shop</a></li>
            <li><a href="/contact" className="hover:text-amber-400">Contact</a></li>
          </ul>
        </div>

       

        {/* Column 4 - Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4  text-lg">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-blue-400" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-sm ">
        © {new Date().getFullYear()} Amrutam Ayurveda. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
