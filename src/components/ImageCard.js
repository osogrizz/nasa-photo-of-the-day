import React from 'react';

const ImageCard = (props) => {
    console.log('props', props);
  return (
    <div>
      <h2>{props.imgData.title}</h2>
      <p>{props.imgData.date}</p>
      <img src={props.imgData.url} alt={props.imgData.title}/>
      <p>{props.imgData.explanation}</p>
    </div> 
  )
}
export default ImageCard;
