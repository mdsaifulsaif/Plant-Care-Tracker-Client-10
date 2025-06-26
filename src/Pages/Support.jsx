import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaHeadset,
  FaEnvelope,
  FaPhoneAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1747881597388.json"; // Replace with correct path

const Support = () => {
  return (
    <div className="pt-20 px-4 my-5 md:px-8 bg-white  ">
      <Helmet>
        <title>Support | Ninja</title>
      </Helmet>

      {/* Header Section */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          Need Help? We're Here!
        </h1>
        <p className="text-lg">
          The Ninja team is ready to support your plant care journey.
        </p>
      </div>

      {/* Lottie Animation with Contact Info */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="w-full md:w-1/2">
          <Lottie animationData={animationData} loop={true} />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-green-600" />
            <p>
              Email:{" "}
              <a
                href="mailto:support@ninja.com"
                className="text-green-600 underline"
              >
                support@ninja.com
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-green-600" />
            <p>
              Phone:{" "}
              <a href="tel:+8801234567890" className="text-green-600 underline">
                +880 1234 567 890
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaHeadset className="text-green-600" />
            <p>Live Chat: Available 9am - 6pm (Mon-Fri)</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-green-50 p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
          <FaQuestionCircle /> Frequently Asked Questions
        </h2>
        <ul className="space-y-3">
          <li>
            <strong>Q:</strong> How do I reset my password?
            <br />
            <span className="text-gray-700 dark:text-gray-300">
              A: Go to the login page and click “Forgot Password”.
            </span>
          </li>
          <li>
            <strong>Q:</strong> How do I add a new plant?
            <br />
            <span className="text-gray-700 dark:text-gray-300">
              A: Navigate to the “Add Plant” page from the menu.
            </span>
          </li>
          <li>
            <strong>Q:</strong> Can I delete a plant I added?
            <br />
            <span className="text-gray-700 dark:text-gray-300">
              A: Yes! Go to "My Plants" and use the delete button.
            </span>
          </li>
          <li>
            <strong>Q:</strong> How do I contact support?
            <br />
            <span className="text-gray-700 dark:text-gray-300">
              A: Use the email, phone, or live chat listed above.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Support;
