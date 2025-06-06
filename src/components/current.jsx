import React, { useEffect, useState } from "react";
import useWeatherData from "./apiCall";

const CurrentWeather = () => {
    const { weatherData, city, setCity, loading, error } = useWeatherData();
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!weatherData || !weatherData.main || !weatherData.weather) return <p>No weather data available.</p>; 
    
    return (
        <>
            <div className='header'>
                <h1 className='city'>{weatherData.name}</h1>
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