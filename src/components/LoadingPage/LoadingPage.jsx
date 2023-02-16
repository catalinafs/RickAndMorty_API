import React from 'react';
import { Loader } from '../Loader/Loader.jsx';
import './LoadingPage.css';

export const LoadingPage = () => {
    return (
        <div className="ContainerLoadingPage">
            <Loader />
        </div>
    )
}