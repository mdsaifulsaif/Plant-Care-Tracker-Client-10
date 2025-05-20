import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Home() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    renderMode: "performance",
    slides: {
      perView: 1,
      spacing: 15,
    },
  });
  return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide bg-green-100 p-8 rounded-xl">
          Slide 1
        </div>
        <div className="keen-slider__slide bg-green-200 p-8 rounded-xl">
          Slide 2
        </div>
        <div className="keen-slider__slide bg-green-300 p-8 rounded-xl">
          Slide 3
        </div>
      </div>
    </div>
  );
}

export default Home;
