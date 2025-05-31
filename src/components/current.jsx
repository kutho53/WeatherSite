import React, { useEffect, useState } from "react";
import useWeatherData from "./apiCall";

const CurrentWeather = () => {
    // const [weatherData, setWeatherData] = useState(null);
    // const [city, setCity] = useState("raleigh");
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    // const API_KEY = process.env.API_KEY;
    // const fetchWeatherData = async (cityName) => {
    //   try {
    //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;
    //     const response = await fetch(url);
    //     if (!response.ok) throw new Error("Failed to fetch weather data");
    //     const data = await response.json();
    //     setWeatherData(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

//     fetchWeatherData(city)
//   },[city]);
    const { weatherData, city, setCity, loading, error } = useWeatherData();
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!weatherData || !weatherData.main || !weatherData.weather) return <p>No weather data available.</p>; 
    
    return (
        <>
            <div className='header'>
                <h1 className='city'>{weatherData.city}</h1>
                <p className='temp'>{weatherData.main.temp}° F</p>
                <p className='condition'>{weatherData.weather[0].main}</p>
            </div>
            <div className='current-details'>
                <div>
                    <p>Humidity</p>
                    <p style={{fontWeight: 'bold'}}>{weatherData.main.humidity}%</p>
                </div>
                <div>
                    <p>Wind Speed</p>
                    <p style={{fontWeight: 'bold'}}>{weatherData.wind.speed} mph</p>
                </div>
            </div>
        </>
    );
}

export default CurrentWeather;