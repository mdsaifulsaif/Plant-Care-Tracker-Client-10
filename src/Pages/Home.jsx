import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Slider from "../Components/Slider";
import NewPlants from "../Components/NewPlants";

function Home() {
  // const [sliderRef] = useKeenSlider({
  //   loop: true,
  //   mode: "free-snap",
  //   renderMode: "performance",
  //   slides: {
  //     perView: 1,
  //     spacing: 15,
  //   },
  // });
  return (
    <div className="">
      {/* <Slider></Slider> */}
      <NewPlants></NewPlants>
    </div>
  );
}

export default Home;
