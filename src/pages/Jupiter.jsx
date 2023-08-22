import React, { useState } from "react";
import Context from "../components/Context";
import Card from "../components/Card";
import LinkSource from "../components/LinkSource";
import PlantStage from "../components/PlantStage";
import Img from "../components/Img";
import surface from "../assets/img/geology-jupiter.png";
import internal from "../assets/img/planet-jupiter-internal.svg";
import overview from "../assets/img/planet-jupiter.svg";
import "../components/styles.css";
const Jupiter = () => {
  const [activeImage, setActiveImage] = useState("overview");
  const [activeStage, setActiveStage] = useState("overview");

  const handleImageChange = (imageType) => {
    setActiveImage(imageType);
    setActiveStage(imageType);
  };

  const subtitles = {
    overview:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    internal:
      "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
    surface:
      "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
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
            <Context title={"Jupiter"} subtitle={subtitles[activeImage]} />
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
        <Card title={"ROTATION TIME"} value={"9.93 hours"} />
        <Card title={"REVOLUTION TIME"} value={"11.86 years"} />
        <Card title={"radius"} value={"69,911 km"} />
        <Card title={"AVERAGE TEMP."} value={"-108°c"} />
      </div>
    </div>
  );
};

export default Jupiter;
