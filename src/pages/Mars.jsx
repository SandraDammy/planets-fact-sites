import React, { useState } from "react";
import Context from "../components/Context";
import Card from "../components/Card";
import LinkSource from "../components/LinkSource";
import PlantStage from "../components/PlantStage";
import Img from "../components/Img";
import surface from "../assets/img/geology-mars.png";
import internal from "../assets/img/planet-mars-internal.svg";
import overview from "../assets/img/planet-mars.svg";
import "../components/styles.css";

const Mars = () => {
  const [activeImage, setActiveImage] = useState("overview");

  const handleImageChange = (imageType) => {
    setActiveImage(imageType);
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
              title={"mercury"}
              subtitle={
                "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet."
              }
              subtitleInternal={
                "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
              }
              subtitleSurface={
                "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
              }
            />
            <LinkSource linkText={"Wikipedia"} />
          </div>
          <div className="context-btn">
            <PlantStage
              number={"01"}
              title={"OVERVIEW"}
              stageEventHandler={() => handleImageChange("overview")}
            />
            <PlantStage
              number={"02"}
              title={"Internal Structure"}
              stageEventHandler={() => handleImageChange("internal")}
            />
            <PlantStage
              number={"03"}
              title={"Surface Geology"}
              stageEventHandler={() => handleImageChange("surface")}
            />
          </div>
        </div>
      </div>
      <div className="container-card">
        <Card title={"ROTATION TIME"} value={"1.03 days"} />
        <Card title={"REVOLUTION TIME"} value={"1.88 years"} />
        <Card title={"radius"} value={"3,389.5 km"} />
        <Card title={"AVERAGE TEMP."} value={"−28°c"} />
      </div>
    </div>
  );
};

export default Mars;
