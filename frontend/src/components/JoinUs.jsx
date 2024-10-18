// JoinUs.jsx
import React from 'react';

const JoinUs = () => {
  return (
    <section className="relative w-full h-[400px] overflow-hidden bg-cover bg-center my-12">
      {/* Background image */}
      <img 
        src={"../src/assets/joinUs.jpg"}  // Replace with the correct image path
        alt="Gym background"
        className="object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold signika-negative">Join the Gymnastic Family</h1>
        <p className="mt-4 max-w-md text-lg md:text-xl leading-relaxed open-sans">
          Gym session or brisk walk can help. Physical activity stimulates many brain chemicals that may leave you.
        </p>
        <button className="mt-6 bg-orange-500 text-white font-bold py-3 px-10 rounded-[30px] hover:bg-orange-600 transition duration-300 signika-negative-bold">
          BE A MEMBER
        </button>
      </div>
    </section>
  );
};

export default JoinUs;
