import { useState } from "react";
import AboutContents from "./AboutContents";
import AtGlance from "./AtGlance";
import HowWeBehave from "./HowWeBehave";
import OurStory from "./OurStory";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import WhoWeServer from "./WhoWeServer";
import WhyWeExist from "./WhyWeExist";
import { NextIcon, PreviousIcon } from "../../components/core/icons";
import OurBackground from "./OurBackground";

const Achievement = () => {
  const pages = [
    { name: "AboutContents" },
    { name: "OurStory" },
    { name: "WhyWeExist" },
    { name: "WhatWeDo" },
    { name: "HowWeBehave" },
    { name: "WhoWeAre" },
    { name: "WhoWeServer" },
    { name: "AtGlance" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const nextComponent = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const prevComponent = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  const components = [
    <AboutContents key="1" next={nextComponent} pages={pages} />,
    <OurStory key="2" />,
    <OurBackground key={"3"} />,
    <WhyWeExist key="4" />,
    <WhatWeDo key="5" />,
    <HowWeBehave key="6" />,
    <WhoWeAre key="7" />,
    <WhoWeServer key="8" />,
    <AtGlance key="9" />,
  ];
  return (
    <div className=" flex items-center">
      <button
        onClick={prevComponent}
        className=" "
      >
        <PreviousIcon />
      </button>
      <div
        className={`w-full h-screen flex items-center justify-center transition-transform duration-500 ease-in-out`}
      >
        {components[currentIndex]}
      </div>
      <button
        onClick={nextComponent}
        className=" "
      >
        <NextIcon />
      </button>
    </div>
  );
};

export default Achievement;
