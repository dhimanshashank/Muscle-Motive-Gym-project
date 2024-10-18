import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 rounded-lg">
      <div className="logo">
        <img src='./src/assets/NavbarLogo.png' alt="Logo" className='w-[250px] h-[100px] object-cover ml-4'/>
      </div>
      <ul className="flex space-x-8">
        <li className="relative nav-item text-lg font-medium text-gray-700 cursor-pointer hover:text-orange-500">
          Home
          <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-6 h-1 bg-orange-500 rounded-full"></span>
        </li>
        <li className="text-lg font-medium text-gray-700 cursor-pointer hover:text-orange-500">Classes</li>
        <li className="text-lg font-medium text-gray-700 cursor-pointer hover:text-orange-500">Trainers</li>
        <li className="text-lg font-medium text-gray-700 cursor-pointer hover:text-orange-500">Contact</li>
      </ul>
      <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
        Sign up
      </button>
    </nav>
  );
};

export default Navbar;
