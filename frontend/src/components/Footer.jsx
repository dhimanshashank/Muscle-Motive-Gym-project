// Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"; // Importing brand icons
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // Importing solid icons

const Footer = () => {
  return (
    <footer className="text-gray-400 py-8 w-[95%] ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {/* Logo and Text */}
        <div>
          <img
            src={"../src/assets/NavbarLogo.png"}
            alt="Logo"
            className="rounded-full object-cover"
          />
          <p className="text-gray-400 mt-4 open-sans pl-4">
            Gym session or brisk walk can help. Physical activity stimulates
            many chemicals that may leave you.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 justify-center">
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="pt-4 pl-14">
          <h3 className="text-white text-xl font-bold mb-4 signika-negative">Company</h3>
          <ul className="text-gray-400 open-sans">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Classes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Trainers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Category Links */}
        <div className="pt-4 pl-6">
          <h3 className="text-white text-lg font-bold mb-4 signika-negative">Category</h3>
          <ul className="text-gray-400 open-sans">
            <li>
              <a href="#" className="hover:text-white">
                Strength
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Body Building
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Weight Loss
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Basic Yoga
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="pt-4">
          <h3 className="text-white text-lg font-bold mb-4">Contact us</h3>
          <ul className="text-gray-400 open-sans cursor-pointer">
            <li className="hover:text-white pb-1">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> +91 88476 80989
            </li>
            <li className="hover:text-white pb-1">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> firefitness@gmail.com
            </li>
            <li className="hover:text-white pb-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Jagraaj Complex, Opp Gill Kacheri, Gill Road, Ludhiana - 141003 (Near Gne College)
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-10 flex justify-between items-center border-t border-gray-700 pt-6">
        <p>&copy; 2024 Fitness Gym. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">
            Terms of use
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
