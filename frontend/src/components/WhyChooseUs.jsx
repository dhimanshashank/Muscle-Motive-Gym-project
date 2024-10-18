import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-8 text-white mt-12 w-[95%]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl font-bold open-sans-bold">Why Choose Us</h2>
          <p className="mt-2 text-gray-400">
            When picking a gym, consider its amenities like access, hours, location, <br />
            and extra benefits to enhance your fitness journey.
          </p>
        </div>

        {/* Content Grid divided into 3 sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#222222] rounded-[70px]">
          {/* First Column with 2 points */}
          <div className="space-y-6 text-white p-8 flex flex-col justify-center items-start">
            <div className="flex items-start">
              <img
                src={"../src/assets/Dumble.jpg"}
                alt="Amenities Icon"
                className="h-10 w-10 mr-4"
              />
              <div>
                <h4 className="text-[28px] font-semibold signika-negative">
                  Facility Amenities
                </h4>
                <p className="text-gray-400 open-sans">
                  Best training facilities with state-of-the-art equipment and services.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <img
                src={"../src/assets/Salary.png"}
                alt="Cost Icon"
                className="h-10 w-10 mr-4"
              />
              <div>
                <h4 className="text-[28px] font-semibold signika-negative">
                  Membership Cost
                </h4>
                <p className="text-gray-400 open-sans">
                  Affordable membership options that fit your budget.
                </p>
              </div>
            </div>
          </div>

          {/* Second Column with 2 points */}
          <div className="space-y-6 text-white p-8 flex flex-col justify-center items-start">
            <div className="flex items-start">
              <img
                src={"../src/assets/Dumble2.png"}
                alt="Trainers Icon"
                className="h-10 w-10 mr-4"
              />
              <div>
                <h4 className="text-[28px] font-semibold signika-negative">
                  Trainer Qualifications
                </h4>
                <p className="text-gray-400 open-sans">
                  Certified trainers to guide you on your fitness journey.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <img
                src={"../src/assets/clock.png"}
                alt="Operating Hours Icon"
                className="h-10 w-10 mr-4"
              />
              <div>
                <h4 className="text-[28px] font-semibold signika-negative">
                  Operating Hours
                </h4>
                <p className="text-gray-400 open-sans">
                  Open 24/7 to match your schedule.
                </p>
              </div>
            </div>
          </div>

          {/* Third Column with image */}
          <div className="w-full h-auto lg:h-[350px] overflow-hidden shadow-lg">
            <img
              src={"../src/assets/WhyChooseUS.jpg"}
              alt="Gym Image"
              className="bg-[#222222] rounded-r-[70px] object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
