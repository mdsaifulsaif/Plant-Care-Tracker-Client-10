import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaExclamationTriangle,
  FaLeaf,
  FaSnowflake,
  FaSun,
  FaCloudSun,
} from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1747881597388.json"; // Adjust path if needed

const About = () => {
  return (
    <div className="pt-20 px-4 md:px-8 my-5 ">
      <Helmet>
        <title>About | Ninja</title>
      </Helmet>

      {/* Website Info */}
      <div className="mb-10 text-center  ">
        <h1 className="text-3xl font-bold text-green-600 mb-2">About Ninja</h1>
        <p className="text-lg text-gray-800">
          Welcome to <span className="font-semibold">Ninja</span> — your plant
          care assistant!
        </p>
      </div>

      {/* Lottie Animation Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="w-full md:w-1/2">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Why Ninja?
          </h2>
          <p className="text-lg">
            Ninja helps you take care of your houseplants like a pro with
            seasonal tips, mistake alerts, and smart tools for plant lovers.
          </p>
        </div>
      </div>

      {/* Tooltip Section */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-green-600 mb-4">
          Tooltip Feature
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Wraps the profile image in a circular, centered container.</li>
          <li>
            Uses <code>data-tooltip-id</code> and{" "}
            <code>data-tooltip-content</code> for tooltip setup.
          </li>
          <li>Displays the user's profile picture if available.</li>
          <li>
            Shows user name on hover with <code>react-tooltip</code>.
          </li>
        </ul>
      </div>

      {/* Top Plant Care Mistakes */}
      <div className="bg-green-50  p-6 rounded-2xl shadow-md mb-12">
        <h2 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
          <FaExclamationTriangle className="text-yellow-500" /> Top 5 Plant Care
          Mistakes
        </h2>
        <ul className="list-decimal ml-6 space-y-1">
          <li>Overwatering</li>
          <li>Insufficient light</li>
          <li>Ignoring seasonal needs</li>
          <li>Wrong pot size</li>
          <li>Using non-draining soil</li>
        </ul>
      </div>

      {/* Seasonal Tips */}
      <div className="p-6 bg-green-50  rounded-2xl shadow-md">
        <h2 className="text-xl font-bold text-green-600 mb-4">
          Seasonal Plant Care Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <FaSun className="text-orange-500" />
            <span>Summer: Water more often & provide shade</span>
          </div>
          <div className="flex items-center gap-3">
            <FaLeaf className="text-green-600" />
            <span>Spring: Repot & fertilize your plants</span>
          </div>
          <div className="flex items-center gap-3">
            <FaCloudSun className="text-yellow-500" />
            <span>Autumn: Reduce watering & remove dead leaves</span>
          </div>
          <div className="flex items-center gap-3">
            <FaSnowflake className="text-blue-400" />
            <span>Winter: Limit watering & keep plants warm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
