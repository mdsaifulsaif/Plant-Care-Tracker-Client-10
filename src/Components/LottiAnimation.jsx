import React from "react";
import Lottie from "lottie-react";
import plantAnimation from "../assets/Animation - 1747881597388.json";

function LottiAnimation() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 space-x-6">
      {/* Left: Animation */}
      <div className="w-[320px] h-[320px]">
        <Lottie
          animationData={plantAnimation}
          loop={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Right: Text Content */}
      <div>
        <h2 className="text-xl font-bold text-green-700">Grow with Nature</h2>
        <p className="text-sm text-gray-600 mt-2 max-w-xs">
          Embrace the power of plants they clean the air, reduce stress, and
          bring life into your home.
        </p>
      </div>
    </div>
  );
}

export default LottiAnimation;
