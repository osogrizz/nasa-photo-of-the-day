import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import ImageCard from './components/ImageCard';


function App() {

  const [images, setImages] = useState([]);
  const [date, setDate]  = useState('');

  const handleDate = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  }

  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
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
  },[date])

  return (
    <div className="App">
      <input type="date" onChange={handleDate}/>
      <ImageCard imgData={images} />
    </div>
  );
}

export default App;
