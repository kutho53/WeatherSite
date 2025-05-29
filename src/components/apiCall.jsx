import { useState } from "react";
const [weatherData, setWeatherData] = useState(null);
const [city, setCity] = useState("raleigh");

useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const fetchWeatherData = async (cityName) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData(city)
  },[city]);

  export default useEffect;