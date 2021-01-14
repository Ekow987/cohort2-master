import React, { useState,useEffect } from 'react';
 import Spinner from 'react-bootstrap/Spinner';
import _ from 'lodash';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


function Home() {
  
  const [ location, setLocation ] = useState('');
  const [info,setInfo]=useState({});
   
  
  useEffect(() => {
    
    
  //get user geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let newCoords = [position.coords.latitude, position.coords.longitude];
      const coordintates = newCoords.toString();

      const params = {
        access_key: '8dbd73f5eac44f075eb816641702386c',
        query: coordintates,
      }; 
      axios.get('http://api.weatherstack.com/current',{params})
      .then(response => {
        const apiResponse  = response.data;
          setInfo(apiResponse)
      }).catch(error => {
        console.log(error);
      });
    });
  }else{
    console.log('Not supported');
  }
    }, []);
   
 
 
const handleSearch = (e) => {
  e.preventDefault();
  axios.get(`http://api.weatherstack.com/current?access_key=8dbd73f5eac44f075eb816641702386c&query=${location}`)
      .then(response => {
        const apiResponse  = response.data;
          setInfo(apiResponse)
      }).catch(error => {
        console.log(error);
      });
  }
 



  return (
    <div className="app">


     {_.isEmpty(info) ? "loading":(

       <>
  <Button href="/Signup">Logout</Button> 
<div className="search-wrap">
  <input
    type='text'
    placeholder='Search any city...'
    className='searchbar'
    value={location}
    onChange={ e => setLocation(e.target.value) }
  />
  

<button
 type='submit'
 value='Search'
 onClick={ e => handleSearch(e) }
 >
Search
</button>
</div>
  
<Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>

       <div className="col">
       <p>Country:{info.location.country}</p>
       <p>latitude:{info.location.lat}&deg;</p>
       <p>longitude:{info.location.lon}&deg;</p>
       <p> region:{info.location.region}</p>
       <p>localTime:{info.location.localtime}</p>
       <p>weather_descriptions:{info.current.weather_descriptions[0]}</p>
       {/* <p>weather_icons:{info.current.weather_icons[1]}</p> */}
       <p>Pressure: {info.current.pressure}</p>
       <p>observation_time:{info.current.observation_time}</p>
       <p>Current temperature:{info.current.temperature}℃</p>
       <p>Humidity : {info.current.humidity}</p>
       <p>is_day : {info.current.is_day}</p>
       </div>
       </>
     )}

    </div>
  );

}

export default Home;


