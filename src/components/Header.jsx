import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 border-b-2 border-[rgba(255,255,255,0.08)] bg-gray-900">
      <nav className="px-6 py-4 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex gap-2 items-center">
          <svg
            className="TitleLogo_logo__7cnAS w-[30px]"
            viewBox="0 0 1699 660"
          >
            <path
              fill="#EC2C40"
              d="M804.7,660.3H50c-38.8,0-62.8-55-42.7-98.2L253,31.4C262,11.9,278.2,0,295.7,0h509V660.3z"
            ></path>
            <path
              fill="#00A9E5"
              d="M891.3,0L1646,0c38.8,0,62.8,55,42.7,98.2L1443,628.9c-9,19.5-25.2,31.4-42.7,31.4h-509V0z"
            ></path>
          </svg>
          <span className="text-white text-xl font-bold">Eraser.io</span>
        </div>

        {/* Right Section: Blackboard */}
        <div>
          <span className="text-white text-xl font-bold hover:text-gray-400 transition">
            Blackboard
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
