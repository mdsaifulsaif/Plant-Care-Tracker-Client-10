import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Slider from "../Components/Slider";
import NewPlants from "../Components/NewPlants";
import { useLoaderData } from "react-router";
import TopPlantCareMistakes from "../Components/TopPlantCareMistakes";
import SeasonalPlantCareTips from "../Components/SeasonalPlantCareTips";

function Home() {
  // const data = useLoaderData();
  const [latestplant, setLatestPlant] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((res) => res.json())
      .then((data) => {
        const letest = data.slice(-2).reverse();
        setLatestPlant(letest);
        console.log(latestplant);
      });
  }, []);

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
    <div className="w-11/12 mx-auto">
      <Slider></Slider>
      <NewPlants></NewPlants>
      <TopPlantCareMistakes></TopPlantCareMistakes>
      <SeasonalPlantCareTips></SeasonalPlantCareTips>
    </div>
  );
}

export default Home;
