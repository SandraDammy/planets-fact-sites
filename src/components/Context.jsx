import React from 'react'

const Context = ({title, subtitle, source}) => {
  return (
    <div>
      <h1 className='context-title'>{title}</h1>
      <p className='context-text'>{subtitle}</p>
    </div>
  )
}

export default Context
