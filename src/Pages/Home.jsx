import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Slider from "../Components/Slider";
import NewPlants from "../Components/NewPlants";
import { useLoaderData } from "react-router";
import TopPlantCareMistakes from "../Components/TopPlantCareMistakes";
import SeasonalPlantCareTips from "../Components/SeasonalPlantCareTips";
import LottiAnimation from "../Components/LottiAnimation";

function Home() {
  const data = useLoaderData();

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("darkk");
    }

    return () => {
      document.documentElement.classList.remove("darkk");
    };
  }, [isDark]);

  // useEffect(() => {
  //   // Add 'dark' class when this component mounts
  //   document.documentElement.classList.add("darkk");

  //   // Remove 'dark' class when unmount (navigate away)
  //   return () => {
  //     document.documentElement.classList.remove("darkk");
  //   };
  // }, []);
  return (
    <div className="w-11/12  mx-auto">
      <Slider></Slider>
      <button
        onClick={() => setIsDark((prev) => !prev)}
        className="bg-green-600 px-4 py-2 text-white rounded"
      >
        Toggle Dark Mode
      </button>
      <NewPlants data={data}></NewPlants>
      <LottiAnimation></LottiAnimation>
      <TopPlantCareMistakes></TopPlantCareMistakes>
      <SeasonalPlantCareTips></SeasonalPlantCareTips>
    </div>
  );
}

export default Home;
