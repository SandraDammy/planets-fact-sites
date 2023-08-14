import React from "react";
import Context from "../components/Context";
import Card from "../components/Card";
import LinkSource from "../components/LinkSource";
import PlantStage from "../components/PlantStage";

const Mercury = () => {
  return (
    <div className="container">
      <div className="container-body">
        <div className="planet">
       
        </div>
        <div className="container-context">
          <Context
            title={"mercury"}
            subtitle={
              "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
            }
          />
          <LinkSource linkText={"Wikipedia"} />
          <div>
            <PlantStage number={"01"} title={"OVERVIEW"} />
            <PlantStage number={"02"} title={"Internal Structure"} />
            <PlantStage number={"03"} title={"Surface Geology"} />
          </div>
        </div>
      </div>
      <div className="container-card">
        <Card title={"ROTATION TIME"} value={"58.6"} />
        <Card title={"ROTATION TIME"} value={"58.6"} />
        <Card title={"ROTATION TIME"} value={"58.6"} />
        <Card title={"ROTATION TIME"} value={"58.6"} />
      </div>
    </div>
  );
};

export default Mercury;
