import React, { useState } from "react";
import Context from "../components/Context";
import Card from "../components/Card";
import LinkSource from "../components/LinkSource";
import PlantStage from "../components/PlantStage";
import Img from "../components/Img";
import surface from "../assets/img/geology-venus.png";
import internal from "../assets/img/planet-venus-internal.svg";
import overview from "../assets/img/planet-venus.svg";
import "../components/styles.css";

const Venus = () => {
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
                "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."
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
        <Card title={"ROTATION TIME"} value={"243 days"} />
        <Card title={"REVOLUTION TIME"} value={"224.7 days"} />
        <Card title={"radius"} value={"6,051.8 km"} />
        <Card title={"AVERAGE TEMP."} value={"471°c"} />
      </div>
    </div>
  );
};

export default Venus;
