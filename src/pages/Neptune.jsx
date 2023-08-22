import React, { useState } from "react";
import Context from "../components/Context";
import Card from "../components/Card";
import LinkSource from "../components/LinkSource";
import PlantStage from "../components/PlantStage";
import Img from "../components/Img";
import surface from "../assets/img/geology-neptune.png";
import internal from "../assets/img/planet-neptune-internal.svg";
import overview from "../assets/img/planet-neptune.svg";
import "../components/styles.css";

const Neptune = () => {
  const [activeImage, setActiveImage] = useState("overview");
  const [activeStage, setActiveStage] = useState("overview");

  const handleImageChange = (imageType) => {
    setActiveImage(imageType);
    setActiveStage(imageType);
  };

  const subtitles = {
    overview:
      "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
    internal:
      "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
    surface:
      "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
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
            <Context title={"Neptune"} subtitle={subtitles[activeImage]} />
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
        <Card title={"ROTATION TIME"} value={"16.08 hours"} />
        <Card title={"REVOLUTION TIME"} value={"164.79 years"} />
        <Card title={"radius"} value={"24,622 km"} />
        <Card title={"AVERAGE TEMP."} value={"-201°c"} />
      </div>
    </div>
  );
};

export default Neptune;
