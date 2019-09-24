import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import ImageCard from './components/ImageCard';


function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then( response => {
        // console.log(response.data);
        setImages(response.data);
        // console.log(images)
      })
      .catch(err => {
        console.log(err);
      })
    }

    fetchData();
    return () => {
      console.log('cleanup')
    }
  },[])

  return (
    <div className="App">
      <ImageCard imgData={images} />
    </div>
  );
}

export default App;
