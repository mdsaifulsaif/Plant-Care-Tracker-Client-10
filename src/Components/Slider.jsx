import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  FaLeaf,
  FaTint,
  FaSun,
  FaSeedling,
  FaTree,
  FaRecycle,
} from "react-icons/fa";

const slides = [
  { icon: <FaLeaf size={40} />, title: "Eco Friendly" },
  { icon: <FaTint size={40} />, title: "Water Saving" },
  { icon: <FaSun size={40} />, title: "Sun Care" },
  { icon: <FaSeedling size={40} />, title: "Growth Support" },
  { icon: <FaTree size={40} />, title: "Tree Care" },
  { icon: <FaRecycle size={40} />, title: "Sustainable" },
];

function Slider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1, spacing: 16 },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 16 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 24 },
        },
      },
    },
    [
      (slider) => {
        let timeout;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 2500);
        }

        slider.on("created", () => {
          nextTimeout(); // Start auto-slide
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="px-4 py-5 mt-20 max-w-6xl mx-auto">
      <h2 className="text-2xl mt-5  font-bold text-green-700   flex items-center justify-center gap-2">
        <FaLeaf className="text-green-700" />
        Our Features
      </h2>
      <div ref={sliderRef} className="keen-slider ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="keen-slider__slide  flex items-center md:h-[55vh] justify-center"
          >
            <div className="bg-white  shadow-lg rounded-xl p-6 w-full h-48 flex flex-col items-center justify-center text-center hover:shadow-xl transition">
              <div className="text-green-600 mb-3">{slide.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {slide.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
