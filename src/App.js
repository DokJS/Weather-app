import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
   const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const APIKEY = `70d816fcde4d8cf348cf5b17b57a1845`
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}&units=metric&lang=fr`

  // used for retrieve current location's weather data from API
  const fetchData = async (event) => {
    if (event.key === 'Enter') {
      if (event.target.value !== '') {
        try {
        const response = await axios.get(url)
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
      } else {
        // used for remove data when user press enter key when input is empty
        setData({})
      }
    }
  }

  useEffect(() => {
    document.title = `My Weather App`
  },[])
 
  return (
    <div className="container">
      <input type="text" name="location" placeholder='Enter Location' onChange={(event)=>setLocation(event.target.value)} onKeyPress={fetchData} />
      {
        data.name &&(<div className='main'>
        <h3>{data.name }</h3>
        <h1>{`${data.main?.temp} ° C` } </h1>
      </div>)
      }
      <div className='description'>
        <span>{data.weather && data.weather[0].description }</span>
      </div>
      {
        data.name && (<div className="informations">
        <div>
          <span>{ data.main?.temp}</span>
          <span>Feels Like</span>
        </div>
        <div>
          <span>{ data.main?.humidity }</span>
          <span>Humidity</span>
        </div>
        <div>
          <span>{data.wind?.speed }</span>
          <span>Winds</span>
        </div>
      </div>)
      }
    </div>
  );
}

export default App;
