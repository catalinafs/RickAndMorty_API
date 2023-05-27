import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { InfoContext } from '../../context/index.jsx';
import CardDetails from '../Card/CardDetails.jsx';
import Coders from '../Pages/Coders/Coders.jsx';
import Document from '../Pages/Documents/Document.jsx';
import Home from '../Pages/Home/Home.jsx';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';

const Rutas = () => {
    return (
        <InfoContext>
            <Router>
                <NavigationBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/:id' element={<CardDetails />} />
                    <Route path='/Coders' element={<Coders />} />
                    <Route path='/Document' element={<Document />} />
                </Routes>
            </Router>
        </InfoContext>
    );
}

export default Rutas;