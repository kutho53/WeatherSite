import React, { useEffect, useState } from "react";

const useWeatherData = (initialCity = 'woodland') => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(initialCity);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const GEOCODE_API_KEY = import.meta.env.VITE_GEOCODE_API_KEY;
        console.log("GEOCODE_API_KEY:", GEOCODE_API_KEY);
        console.log("API_KEY:", API_KEY);
        console.log("City:", city);

        // fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${GEOCODE_API_KEY}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.results && data.results.length > 0) {
        //             console.log(data.results);
        //             console.log(data.results.length);
        //             const { lat, lng } = data.results[0].geometry;
        //             console.log("Coordinates:", lat, lng);
        //             // You can use lat and lng to fetch the full data
        //         } else {
        //             console.error("No results found for the given city.");
        //             setError("No results found for the given city.");
        //             setLoading(false);
        //         }
        //     })

        const fetchWeatherData = async (lat, lon) => {
            try {
                setLoading(true);
                setError(null);
                const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`;
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch response');
                const data = await response.json();
                console.log("Weather Data:", data);
                setWeatherData(data);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${GEOCODE_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    console.log(data.results);
                    console.log(data.results.length);
                    const { lat, lng } = data.results[0].geometry;
                    console.log("Coordinates:", lat, lng);
                    fetchWeatherData(lat, lng);
                    // You can use lat and lng to fetch the full data
                } else {
                    console.error("No results found for the given city.");
                    setError("No results found for given city.");
                    setLoading(false);
                }
            })
            .catch(err => {
                console.error(err);
                setError(err);
                setLoading(false)
            })
    }, [city]);

    return { weatherData, city, setCity, loading, error };
};

export default useWeatherData;
