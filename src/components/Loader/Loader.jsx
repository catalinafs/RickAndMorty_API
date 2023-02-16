import React from 'react';
import './Loader.css'

export const Loader = () => {
    return (
        <div className="loader">
            <div className="face">
                <div className="circle circle1"></div>
            </div>
            <div className="face">
                <div className="circle circle2"></div>
            </div>
        </div>
    )
}
