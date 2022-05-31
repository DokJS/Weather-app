import React from 'react';


function App() {
  return (
    <div className="container">
      <input type="text" name="location" placeholder='Enter Location' />
      <div className='main'>
        <h3>Denver</h3>
        <h1>30°F</h1>
      </div>
      <div className='description'>
        <span>clear</span>
      </div>
      <div className="informations">
        <div>
          <span>30°F</span>
          <span>Feels Like</span>
        </div>
        <div>
          <span>72%</span>
          <span>Humidity</span>
        </div>
        <div>
          <span>2 MPH</span>
          <span>Winds</span>
        </div>
      </div>
    </div>
  );
}

export default App;
