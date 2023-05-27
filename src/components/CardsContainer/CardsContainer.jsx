import React from 'react';
import './CardsContainer.css';

export const Cards = ({ children }) => {
    return (
        <div className='Cards'>
            {children}
        </div>
    );
}
