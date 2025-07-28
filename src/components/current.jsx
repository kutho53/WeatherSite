import React, { useEffect, useState } from "react";
import useWeatherData from "./apiCall";

const CurrentWeather = () => {
    const { weatherData, city, setCity, loading, error } = useWeatherData('mebane');
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!weatherData || !weatherData.currentConditions) return <p>No weather data available.</p>; 
    
    return (
        <>
            <div className='header'>
                <h1 className='city'>{weatherData.resolvedAddress}</h1>
                <p className='temp'>{weatherData.currentConditions.temp}° F</p>
                <p className='condition'>{weatherData.currentConditions.icon}</p>
            </div>
            <div className='current-details'>
                <div>
                    <p>Humidity</p>
                    <p style={{fontWeight: 'bold'}}>{weatherData.currentConditions.humidity}%</p>
                </div>
                <div>
                    <p>Wind Speed</p>
                    <p style={{fontWeight: 'bold'}}>{weatherData.currentConditions.windspeed} mph</p>
                </div>
            </div>
        </>
    );
}

export default CurrentWeather;