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
                ""
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
        <Card title={"ROTATION TIME"} value={""} />
        <Card title={"REVOLUTION TIME"} value={""} />
        <Card title={"radius"} value={""} />
        <Card title={"AVERAGE TEMP."} value={""} />
      </div>
    </div>
  );
};

export default Neptune
