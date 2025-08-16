import useWeatherData from "./apiCall";

const Forecast = () => {
    const { weatherData, city, setCity, loading, error } = useWeatherData();
    const iconMap = {
        "clear-day": "☀️",
        "clear-night": "🌙",
        "partly-cloudy-day": "⛅",
        "partly-cloudy-night": "🌤️",
        "cloudy": "☁️",
        "rain": "🌧️",
        "snow": "❄️",
        "sleet": "🌨️",
        "wind": "💨",
        "fog": "🌫️",
    };
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!weatherData || !weatherData.main || !weatherData.weather) return <p>No weather data available.</p>; 
    
    return (
        <>
            <div className="forecast">
                <h2 className="forecast-header">Forecast</h2>
                    <div className='forecastDays'>
                        <div className='forecastDay'>
                            <p>Tomorrow</p>
                            <p>68* F</p>
                            <p>sunny</p>
                        </div>  
                        <div className='forecastDay'>
                            <p>Tomorrow</p>
                            <p>68* F</p>
                            <p>sunny</p>
                        </div>  
                    </div>
            </div>
        </>
    )
}

export default Forecast;