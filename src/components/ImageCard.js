import React from 'react';

import { Card, Typography, CardActionArea, CardContent } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

const ImageCard = (props) => {
    console.log('props', props);
  return (
    !props.imgData 
    ? <h3>Loading</h3> 
    : <Card raised="true" style={{ width: '45vw', margin: '80px auto' }} >
        <CardActionArea>
          <CardMedia >
              <img src={props.imgData.url} alt={props.imgData.title} style={{ width: '100%' }}/>
            </CardMedia> 
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h2" component="h2">{props.imgData.title}</Typography>
          <Typography variant="body1" color="textSecondary" >{props.imgData.date}</Typography>
          <input type="date" onChange={props.handleDate}/>
          <Typography variant="body2" color="textSecondary" >{props.imgData.explanation}</Typography>
        </CardContent>
      </Card>   
  )
}
export default ImageCard;
