import React from "react";
import Context from "../components/Context";
import Card from "../components/Card";
import LinkSource from "../components/LinkSource";
import PlantStage from "../components/PlantStage";
import Img from "../components/Img";
import surface from "../assets/img/geology-mercury.png";
import internal from "../assets/img/planet-mercury-internal.svg";
import overview from "../assets/img/planet-mercury.svg";

const Mercury = () => {
  // const [imageClicked, setImageClicked] = useState({
  //   overview: false,
  //   surface: false,
  //   internal: false
  // });
  // const onClickHandler = (order) => {
  //   setImageClicked((prevState) => ({
  //     ...prevState,
  //     [order]: !prevState[order]
  //   }));
  // };
  return (
    <div className="container">
      <div className="container-body">
        <div className="planet">
          <Img 
          overview={overview} 
          internal={internal} 
          surface={surface} />
        </div>
        <div className="container-context">
          <div className="container-text">
          <Context
            title={"mercury"}
            subtitle={
              "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
            }
          />
          <LinkSource linkText={"Wikipedia"} />
          </div>
          <div className="context-btn">
            <PlantStage number={"01"} title={"OVERVIEW"}
            //  onClick={() => onClickHandler("overview")}
             />
            <PlantStage number={"02"} title={"Internal Structure"} 
            // onClick={() => onClickHandler("internal")}
            />
            <PlantStage number={"03"} title={"Surface Geology"} 
            // onClick={() => onClickHandler("surface")}
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
