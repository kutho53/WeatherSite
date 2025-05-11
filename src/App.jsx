import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Header from './components/header.jsx'
import Layout from "./pages/layout";
import Home from "./pages/home";
import AddNew from "./pages/addNew";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='addNew' element={<AddNew/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App