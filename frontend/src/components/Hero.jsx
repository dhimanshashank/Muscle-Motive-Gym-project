import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-gray-800 py-1 px-6">
      <div className="container mx-auto">
        {/* Hero Text Section - Heading and Buttons */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-10 w-full">
          {/* Left Section - Hero Text */}
          <div className="text-center lg:text-left lg:w-1/2">
            <p className="uppercase text-sm tracking-wide text-gray-500 signika-negative">
              The Best Fitness Club in the Town
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold mt-4 leading-tight signika-negative-bold">
              IMPROVE YOUR <br /> FITNESS LEVEL <br />
              <span className="text-orange-500">FOR THE NEXT LEVEL</span>
            </h1>
          </div>

          {/* Right Section - Buttons */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end space-x-4 pt-32 pr-16">
            <Link to={"/login"} className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 signika-negative">
              Be a Member
            </Link>
            <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition duration-300 signika-negative hover:border-white">
              <span className="mr-2">▶</span> Learn More
            </button>
          </div>
        </div>
        
        {/* Hero Image Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* First Image Section with Separate Text */}
        <div className="w-full lg:flex flex-col p-6">
          {/* First Image */}
          <div className="w-full h-2/3 overflow-hidden shadow-lg rounded-t-xl">
            <img
              src={"../src/assets/hero1.webp"}
              alt="Placeholder for image 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section under the First Image */}
          <div className="w-full p-4 rounded-b-xl">
            <p className="leading-relaxed signika-negative text-md text-justify p-2 ">
              Gym session or brisk walk can help. Physical activity stimulates
              many chemicals that may leave you feeling happier and more
              relaxed. Gym session or brisk walk can help. Physical activity
              stimulates many chemicals that may leave you feeling happier and
              more relaxed.
            </p>
          </div>
        </div>

        {/* Second Image (Larger height) */}
        <div className="w-full rounded-xl overflow-hidden p-4">
          <img
            src={"../src/assets/hero2.jpg"}
            alt="Placeholder for image 2"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
