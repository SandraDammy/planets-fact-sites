import React, { useState } from "react";
import Context from "../components/Context";
import Card from "../components/Card";
import LinkSource from "../components/LinkSource";
import PlantStage from "../components/PlantStage";
import Img from "../components/Img";
import surface from "../assets/img/geology-mercury.png";
import internal from "../assets/img/planet-mercury-internal.svg";
import overview from "../assets/img/planet-mercury.svg";
import "../components/styles.css";

const Mercury = () => {
  const [activeImage, setActiveImage] = useState("overview");
  const [activeStage, setActiveStage] = useState("overview");


  const handleImageChange = (imageType) => {
    setActiveImage(imageType);
    setActiveStage(imageType);
  };

  const subtitles = {
    overview:"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    internal:"Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    surface:"Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
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
        <Card title={"ROTATION TIME"} value={"58.6 Days"} />
        <Card title={"REVOLUTION TIME"} value={"87.97 Days"} />
        <Card title={"radius"} value={"2,439.7 km"} />
        <Card title={"AVERAGE TEMP."} value={"430°c"} />
      </div>
    </div>
  );
};

export default Mercury;
