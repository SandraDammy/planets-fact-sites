import React, { useState } from "react";
import Context from "../components/Context";
import Card from "../components/Card";
import LinkSource from "../components/LinkSource";
import PlantStage from "../components/PlantStage";
import Img from "../components/Img";
import surface from "../assets/img/geology-saturn.png";
import internal from "../assets/img/planet-saturn-internal.svg";
import overview from "../assets/img/planet-saturn.svg";
import "../components/styles.css";

const Saturn = () => {
  const [activeImage, setActiveImage] = useState("overview");
  const [activeStage, setActiveStage] = useState("overview");

  const handleImageChange = (imageType) => {
    setActiveImage(imageType);
    setActiveStage(imageType);
  };

  const subtitles = {
    overview:
      "Saturn Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    internal:
      "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    surface:
      "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ",
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
            <Context title={"saturn"} subtitle={subtitles[activeImage]} />
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
        <Card title={"ROTATION TIME"} value={"10.8 Hours"} />
        <Card title={"REVOLUTION TIME"} value={"29.46 Years"} />
        <Card title={"radius"} value={"58,232 KM"} />
        <Card title={"AVERAGE TEMP."} value={"-138°c"} />
      </div>
    </div>
  );
};

export default Saturn;
