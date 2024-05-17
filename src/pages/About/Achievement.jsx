import { useState } from "react";
import AboutContents from "./AboutContents";
import AtGlance from "./AtGlance";
import OurStory from "./OurStory";
import WhatWeDo from "./WhatWeDo";
import WhoWeServer from "./WhoWeServer";
import WhyWeExist from "./WhyWeExist";
import { NextIcon, PreviousIcon } from "../../components/core/icons";
import OurBackground from "./OurBackground";
import WeAre from "./WeAre";
import WhoWeAre from "./WhoWeAre";

const Achievement = () => {
  const pages = [
    { name: "Our Story" },
    { name: "Our Background" },
    { name: "Why We Exist" },
    { name: "What WeDo" },
    { name: "We Are" },
    { name: "Who We Are" },
    { name: "Who We Server" },
    { name: "At Glance" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextComponent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const prevComponent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  const components = [
    <AboutContents key="1" next={(i) => setCurrentIndex(i)} pages={pages} />,
    <OurStory key="2" />,
    <OurBackground key={"3"} />,
    <WhyWeExist key="4" />,
    <WhatWeDo key="5" />,
    <WeAre key="6" />,
    <WhoWeAre key={"7"} />,
    <WhoWeServer key="9" />,
    <AtGlance key="10" />,
  ];
  return (
    <div className=" flex items-center">
      <button onClick={prevComponent} className=" ">
        <PreviousIcon />
      </button>
      <div
        className={`w-full h-screen flex items-center justify-center transition-transform duration-500 ease-in-out`}
      >
        {components[currentIndex]}
      </div>
      <button onClick={nextComponent} className=" ">
        <NextIcon />
      </button>
    </div>
  );
};

export default Achievement;
