import React, { useState } from "react";
import Context from "../components/Context";
import Card from "../components/Card";
import LinkSource from "../components/LinkSource";
import PlantStage from "../components/PlantStage";
import Img from "../components/Img";
import surface from "../assets/img/geology-uranus.png";
import internal from "../assets/img/planet-uranus-internal.svg";
import overview from "../assets/img/planet-uranus.svg";
import "../components/styles.css";

const Uranus = () => {
  const [activeImage, setActiveImage] = useState("overview");
  const [activeStage, setActiveStage] = useState("overview");

  const handleImageChange = (imageType) => {
    setActiveImage(imageType);
    setActiveStage(imageType);
  };

  const subtitles = {
    overview:
    "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
,     internal:
"The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
, surface:
"The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
};
  return (
    <div className="container">
      <div className="container-body">
        <div className="planet">
          <Img
            overview={overview}
            internal={internal}
            surface={surface}
            activeImage={activeImage}
          />
        </div>
        <div className="container-context">
          <div className="container-text">
            <Context
              title={"uranus"}
              subtitle={subtitles[activeImage]} 
            />
            <LinkSource linkText={"Wikipedia"} />
          </div>
          <div className="context-btn">
            <PlantStage
              number={"01"}
              title={"OVERVIEW"}
              isActive={activeStage === "overview"}
              stageEventHandler={() => handleImageChange("overview")}
            />
            <PlantStage
              number={"02"}
              title={"Internal Structure"}
              isActive={activeStage === "internal"}
              stageEventHandler={() => handleImageChange("internal")}
            />
            <PlantStage
              number={"03"}
              title={"Surface Geology"}
              isActive={activeStage === "surface"}
              stageEventHandler={() => handleImageChange("surface")}
            />
          </div>
        </div>
      </div>
      <div className="container-card">
        <Card title={"ROTATION TIME"} value={"17.2 hours"} />
        <Card title={"REVOLUTION TIME"} value={"84 years"} />
        <Card title={"radius"} value={"25,362 km"} />
        <Card title={"AVERAGE TEMP."} value={"-195°c"} />
      </div>
    </div>
  );
};

export default Uranus;
