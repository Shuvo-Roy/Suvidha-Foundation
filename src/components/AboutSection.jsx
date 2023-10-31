import React from "react";
const AboutSection = () => {
  return (
    <div className="w-5/6 m-auto">
      <h1 className="flex flex-col items-center justify-center mt-8 text-3xl text-yellow gap-2">
        Learn About Us<span className="h-1 w-36 bg-yellow"></span>
      </h1>
      <p className="text-xl">
        Suvidha Mahila Mandal is a non-profit organization working to impart
        education among the financially challenged sections to help them realize
        parity in education and strength of little minds in building a promising
        future. The organization has provisions of student internships, student
        mentorship and the scope to volunteer. Through these programmes, the
        organization aims to achieve the vision of imparting innovative
        education that stays with the students forever and equip them for the
        unforeseen future.
      </p>
      <div className="flex flex-row gap-2 overflow-hidden mt-4 items-center justify-center h-96 w-full">
        <div className="h-full m-4 slide-out">
          <div className="sm:text-center lg:text-left bg-megenta p-4 rounded-md">
            <h2 className="text-2xl">Mission</h2>
            <p className="text-xl">
              To Inspire Students, help them Innovate and let them Integrate to
              build the next generation humankind. To Run Food Donation And
              Awareness Campaign In Rural Region.
            </p>
          </div>
        </div>
        <div className="h-full m-4">
          <div className="sm:text-center lg:text-left bg-red p-4 rounded-md">
            <h2 className="text-2xl">Vission</h2>
            <p className="text-xl">
              To build Next Generation Entrepreneur, by providing them a
              Skill-Based Education. To Provide Internship, Training And
              Workshops and Quality Education All Over The World..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
