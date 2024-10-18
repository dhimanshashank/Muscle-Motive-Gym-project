import React from 'react';

const Stat = () => {
  return (
    <section className="bg-[#222222] py-8 text-white rounded-[70px] mt-6 w-[95%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="text-white">
          <h3 className="text-4xl font-bold signika-negative">500+</h3>
          <p className="text-lg font-semibold signika-negative">Happy Members</p>
          <span className="text-sm text-gray-400 signika-negative">Our community is growing fast!</span>
        </div>
        <div className="text-white">
          <h3 className="text-4xl font-bold">30+</h3>
          <p className="text-lg font-semibold">Weekly Classes</p>
          <span className="text-sm text-gray-400">Pick from various workouts</span>
        </div>
        <div className="text-white">
          <h3 className="text-4xl font-bold">10</h3>
          <p className="text-lg font-semibold">Certified Trainers</p>
          <span className="text-sm text-gray-400">Guidance at every step.</span>
        </div>
        <div className="text-white">
          <h3 className="text-4xl font-bold">99%</h3>
          <p className="text-lg font-semibold">Customer Satisfaction</p>
          <span className="text-sm text-gray-400">We ensure your progress satisfaction</span>
        </div>
      </div>
    </section>
  );
};

export default Stat;
