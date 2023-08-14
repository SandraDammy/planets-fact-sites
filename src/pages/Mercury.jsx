import React from 'react'
import Img from '../components/Img'
import Context from '../components/Context'
import Card from '../components/Card'

const Mercury = () => {
  return (
    <div className='container'>
      <div className='container-body'>
        <Img/>
        <Context/>
      </div>
      <div className='container-card'>
        <Card/>
      </div>
    </div>
  )
}

export default Mercury