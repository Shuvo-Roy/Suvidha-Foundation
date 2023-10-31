import React from "react";
import food from "../assets/icons/diet (1).png";
import education from "../assets/icons/education.png";
import hand from "../assets/icons/holding-hand.png";
import home from "../assets/icons/nursing-home.png";
import social from "../assets/icons/social-responsibility.png";
import protection from "../assets/icons/protection.png";
import HelpHandDown from "./HelpHandDown";

export default function HelpHand() {
  return (
    <div className="bg-whiteXtra">
      <div className="w-5/6 m-auto mb-2">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-yellow text-4xl">What We Do?</h1>
          <p className="text-slate text-6xl">Causes for a Sustainable Future</p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2 items-center justify-center">
          <div className="flex flex-col gap-2 place-items-center mb-45 box-border w-5/6 p-4 m-auto">
            <div>
              <img src={food} className="h-32 w-32 text-yellow" />
            </div>
            <div className="text-base flex flex-col items-center">
              <h1 className="text-2xl flex flex-col">
                Healthy Food
                <span className="bg-yellow w-full h-1"></span>
              </h1>
              <div></div>
              <p>
                We provide resources, conduct awareness campaigns, and
                facilitate access to hygiene facilities, aiming to create a
                healthier environment and prevent the spread of diseases.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 place-items-center mb-45 box-border w-5/6 p-4 m-auto">
            <div>
              <img src={social} className="h-32 w-32" />
            </div>
            <div className="bg-yellow h-5/6 w-1"></div>
            <div className="text-base flex flex-col items-center">
              <h1 className="text-2xl flex flex-col">
                Social Awareness<span className="bg-yellow w-full h-1"></span>
              </h1>
              <p>
                We provide resources, conduct awareness campaigns, and
                facilitate access to hygiene facilities, aiming to create a
                healthier environment and prevent the spread of diseases.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 place-items-center mb-45 box-border w-5/6 p-4 m-auto">
            <div>
              <img src={hand} className="h-32 w-32" />
            </div>
            <div className="bg-yellow h-2/6 w-1"></div>
            <div className="text-base flex flex-col items-center">
              <h1 className="text-2xl flex flex-col">
                Tree Plantation
                <span className="bg-yellow w-full h-1"></span>
              </h1>
              <p>
                Through community engagement and active participation, we
                successfully planted thousands of trees, fostering a greener and
                healthier ecosystem for future generations.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 place-items-center mb-45 box-border w-5/6 p-4 m-auto">
            <div>
              <img src={home} className="h-32 w-32" />
            </div>
            <div className="bg-yellow h-5/6 w-1"></div>
            <div className="text-base flex flex-col items-center">
              <h1 className="text-2xl flex flex-col">
                Health Care<span className="bg-yellow w-full h-1"></span>
              </h1>
              <p>
                We believe that access to healthcare is a fundamental right, and
                we work tirelessly to ensure that healthcare services are
                accessible, affordable, and of high quality for those in need..
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 place-items-center mb-45 box-border w-5/6 p-4 m-auto">
            <div>
              <img src={education} className="h-32 w-32" />
            </div>
            <div className="bg-yellow h-5/6 w-1"></div>
            <div className="text-base flex flex-col items-center">
              <h1 className="text-2xl flex flex-col">
                Primary Education<span className="bg-yellow w-full h-1"></span>
              </h1>
              <p>
                By collaborating with local communities and educators, we aim to
                empower children with the knowledge and skills they need for a
                brighter future.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 place-items-center mb-45 box-border w-5/6 p-4 m-auto">
            <div>
              <img src={protection} className="h-32 w-32" />
            </div>
            <div className="bg-yellow h-5/6 w-1"></div>
            <div className="text-base flex flex-col items-center">
              <h1 className="text-2xl flex flex-col">
                Social Care<span className="bg-yellow w-full h-1"></span>
              </h1>
              <p>
                Our programs encompass a range of support services, including
                counseling, vocational training, and advocacy, with the goal of
                empowering individuals
              </p>
            </div>
          </div>
        </div>
      </div>
      <HelpHandDown />
    </div>
    </div>
    
  );
}
