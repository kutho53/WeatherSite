import useEffect from "./apiCall";

const CurrentWeather = () => {
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