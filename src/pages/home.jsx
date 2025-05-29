import React from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentWeather from '../components/current';
import Forecast from '../components/forecast';
import { useState } from 'react'
import { useEffect } from 'react'



const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <CurrentWeather />
            <Forecast />
        </div>
    );
};

export default Home;