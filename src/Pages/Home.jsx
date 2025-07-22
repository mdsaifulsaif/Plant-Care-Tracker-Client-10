import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Slider from "../Components/Slider";
import NewPlants from "../Components/NewPlants";
import { useLoaderData } from "react-router";
import TopPlantCareMistakes from "../Components/TopPlantCareMistakes";
import SeasonalPlantCareTips from "../Components/SeasonalPlantCareTips";
import LottiAnimation from "../Components/LottiAnimation";
import { Helmet } from "react-helmet-async";

function Home() {
  const data = useLoaderData();
  return (
    <div className="px-5  md:w-6xl  mx-auto">
      <Helmet>
        <title>Ninja | Home</title>
      </Helmet>
      <Slider></Slider>
      <NewPlants data={data}></NewPlants>
      <LottiAnimation></LottiAnimation>
      <TopPlantCareMistakes></TopPlantCareMistakes>
      <SeasonalPlantCareTips></SeasonalPlantCareTips>
    </div>
  );
}

export default Home;
