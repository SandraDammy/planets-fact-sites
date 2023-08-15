import React from 'react'

const Card = ({title,value}) => {
  return (
      <div className='card'>
        <h4 className='card-title'>{title}</h4>
        <h2 className='card-value'>{value}</h2>
      </div>
  );
};

export default Card;
