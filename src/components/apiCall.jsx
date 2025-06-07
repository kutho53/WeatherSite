import React, { useEffect, useState } from "react";

const fullWeatherData

const useWeatherData = (initialCity = 'woodland') => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(initialCity);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        console.log("API_KEY:", API_KEY);
        console.log("City:", city);
        const fetchWeatherData = async (city) => {
            try {
                setLoading(true);
                setError(null);
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch response');
                const data = await response.json();
                console.log("Weather Data:", data);
                setWeatherData(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData(city);
        //console.log(response)
    }, [city]);

    return { weatherData, city, setCity, loading, error };
};

export default useWeatherData;