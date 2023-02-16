import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Document from "../Pages/Documents/Document";
import Home from "../Pages/Home/Home";
import Coders from "../Pages/Coders/Coders";
import NavigationBar from "../NavigationBar/NavigationBar";
import CardDetails from "../Card/CardDetails";


const Rutas = () => {
    console.log('hola')
    return (
        <Router>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<CardDetails/>}/>
                
                <Route path="/Coders" element={<Coders/>}/>
                <Route path="/Document" element={<Document/>}/>
            </Routes>

        </Router>
    )
}

export default Rutas;