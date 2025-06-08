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

        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${GEOCODE_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const { lat, lng } = data.results[0].geometry;
                    console.log("Coordinates:", lat, lng);
                    // You can use lat and lng for further processing if needed
                } else {
                    console.error("No results found for the given city.");
                }
            })

        const fetchWeatherData = async (city) => {
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
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData(city);
        //console.log(response)
    }, [city]);

    return { weatherData, city, setCity, loading, error };
};

// const useWeatherData = (initialCity = 'woodland') => {
//     const [weatherData, setWeatherData] = useState(null);
//     const [city, setCity] = useState(initialCity);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const API_KEY = import.meta.env.VITE_API_KEY;
//         console.log("API_KEY:", API_KEY);
//         console.log("City:", city);
//         const fetchWeatherData = async (city) => {
//             try {
//                 setLoading(true);
//                 setError(null);
//                 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
//                 const response = await fetch(url);
//                 if (!response.ok) throw new Error('Failed to fetch response');
//                 const data = await response.json();
//                 console.log("Weather Data:", data);
//                 setWeatherData(data);
//             } catch (error) {
//                 console.log(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchWeatherData(city);
//         //console.log(response)
//     }, [city]);

//     return { weatherData, city, setCity, loading, error };
// };

export default useWeatherData;