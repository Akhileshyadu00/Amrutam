import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { CiWallet, CiShoppingCart } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuFlower } from "react-icons/lu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-amber-50 shadow-md text-green-800">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Phone Section */}
        <div className="flex items-center space-x-2">
          <FaMobileAlt />
          <span>9999999999</span>
        </div>

        {/* Title */}
        <div className="text-3xl font-bold text-center flex-1">AMRUTAM</div>

        {/* Empty placeholder for symmetry (optional) */}
        <div className="w-[130px]"></div>
      </div>

      {/* Navigation Links */}
      <nav className="">
        <div className="px-6 py-2 flex items-center justify-center gap-4">
          {/* Navigation Menu */}
          <div className="flex space-x-6 font-medium">
            <Link to="/" className="hover:text-amber-600 transition">
              Home
            </Link>
            <Link to="/doctors" className="hover:text-amber-600 transition">
              Find Doctors
            </Link>
            <Link to="/lab-tests" className="hover:text-amber-600 transition">
              Lab Tests
            </Link>
            <Link to="/shop" className="hover:text-amber-600 transition">
              Shop
            </Link>
            <Link to="/forum" className="hover:text-amber-600 transition">
              Forum
            </Link>
            <Link to="/about" className="hover:text-amber-600 transition">
              About Us
            </Link>
          </div>

          {/* Icon Actions */}
          <div className="flex space-x-4 text-xl">
            <Link to="/wallet" className="hover:text-amber-600 transition">
              <CiWallet />
            </Link>
            <Link to="/cart" className="hover:text-amber-600 transition">
              <CiShoppingCart />
            </Link>
            <Link to="/notifications" className="hover:text-amber-600 transition">
              <IoMdNotificationsOutline />
            </Link>
            <Link to="/rewards" className="hover:text-amber-600 transition">
              <LuFlower />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
