import React from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentWeather from '../components/current';
import Forecast from '../components/forecast';


const Home = () => {
    return (
        <wrapper>
            <h1>Home</h1>
            <CurrentWeather />
            <Forecast />
        </wrapper>
    );
};

export default Home;