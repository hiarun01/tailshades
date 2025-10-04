"use client";

import {FaXTwitter, FaGithub} from "react-icons/fa6";
import {RiShadowLine} from "react-icons/ri";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x1">
            <RiShadowLine className="w-7 h-7 text-black" />
            <h1 className="text-xl font-bold text-black">TailShades</h1>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {/* X (Twitter) Icon */}
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Follow us on X"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>

            {/* GitHub Icon */}
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="View on GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
