import  { useState } from 'react';
import { CircularProgress,Alert } from '@mui/material';
import axios from 'axios';
import "../App.css"

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const[loading, setLoading]=useState(false)

  const API_KEY = "ca566842357155688e8f4144c1fc69d4" // Replace with your actual API key from OpenWeatherMap
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
`

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeatherData = async () => {
    if (!city) {
       return alert("Please city Name")
    }

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric', // Metric units for temperature (Celsius)
        },
      });
      setWeatherData(response.data);
      setLoading(false)
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setLoading(false)
      setError('City not found. Please try again.', err.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(city ? true : false)
    
    fetchWeatherData();
  };

  return (
    <div className="App flex justify-center items-center flex-col h-screen ">
      <h1 className='text-4xl font-bold m-4'>Weather App</h1>
      <form onSubmit={handleSubmit}>
       
        <input 
       onChange={handleInputChange} 
       value={city}
        className='rounded-lg bg-white  w-[200px] p-4 text-black '
         placeholder='Enter Your City Name'/>

          <button className='p-4 bg-green-500 rounded-lg ml-4' >Get Data</button>
      </form>

      {error && <p className='p-4 text-2xl text-red-600 font-bold'><Alert severity="error">{error}</Alert></p>}
      {loading ? <p className='mt-4'> <CircularProgress color="inherit" /> </p> :
      weatherData && (
        <div className="weather-info bg-white text-black py-10 px-14 rounded-xl mt-4">
          <h2 className='font-bold text-xl'>{weatherData.name}, {weatherData.sys.country}</h2>
          <p className='text-lg py-2'>Temperature: {weatherData.main.temp}°C</p>
          <p className='text-lg py-2'>Weather: {weatherData.weather[0].description}</p>
          <p className='text-lg py-2'>Humidity: {weatherData.main.humidity}%</p>
          <p className='text-lg py-2'>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )} 
    </div>
  );
}

export default Weather;
