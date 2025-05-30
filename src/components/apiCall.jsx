import React, { useEffect, useState } from "react";

const useWeatherData = (initialCity = 'raleigh') => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(initialCity);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_KEY = process.env.API_KEY;
        const fetchWeatherData = async (cityName) => {
            try {
                setLoading(true);
                setError(null);
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch response');
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData(city);
    }, [city]);

    return { weatherData, city, setCity, loading, error };
};

export default useWeatherData;