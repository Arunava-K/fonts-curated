import React from 'react';
import './fontcard.css';

interface CardProps {
  name: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { name } = props;

  const fontInfo: React.CSSProperties = {
    fontFamily: name,
  };

  return (
    <div className='card'>
      <div className='font-name' style={fontInfo}>{name}</div>
      <div className='text-wrapper'>
        <div className='font-header'>This is a heading</div>
        <div className='font-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non elit id magna aliquet ullamcorper et eget eros.</div>
      </div>
    </div>
  );
};

export default Card;
