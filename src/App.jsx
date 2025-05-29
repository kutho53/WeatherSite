import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Header from './components/header.jsx'
import Layout from "./pages/layout";
import Home from "./pages/home";
import ChangeLoc from "./pages/changeLoc";
import ErrorPage from "./pages/errorPage";
import './App.css';

// const [weatherData, setWeatherData] = useState(null);
// const [city, setCity] = useState("raleigh");
// useEffect(() => {
//     const fetchWeatherData = async (cityName) => {
//       try {
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;
//         const response = await fetch(url);
//         const data = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchWeatherData(city)
//   },[city]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='changeLoc' element={<ChangeLoc/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App