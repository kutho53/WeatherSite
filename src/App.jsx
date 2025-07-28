import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Header from './components/header.jsx'
import Layout from "./pages/layout";
import Home from "./pages/home";
import ChangeLoc from "./pages/changeLoc";
import ErrorPage from "./pages/errorPage";
import './App.css';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='changeLoc' element={<ChangeLoc/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App