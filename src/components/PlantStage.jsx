import React from 'react'
import "./styles.css";


const PlantStage = ({number, title, stageEventHandler, isActive }) => {
  const stageClass = isActive ? 'plant-stage plant-active' : 'plant-stage';

  return (
    <div onClick={stageEventHandler} className={stageClass}>
      <p className='number'>{number}</p>
      <p className='stage-text'>{title}</p>
    </div>
  )
}

export default PlantStage
