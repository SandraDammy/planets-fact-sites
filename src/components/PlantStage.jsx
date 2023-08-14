import React from 'react'

const PlantStage = ({number, title, stageEventHandler}) => {
  return (
    <div onClick={stageEventHandler} className='plant-stage'>
      <p className='number'>{number}</p>
      <p className='stage-text'>{title}</p>
    </div>
  )
}

export default PlantStage
