import React from 'react';
import './CardsContainer.css';


export const Cards = ({ children }) => {
    console.log(children)
    return (<>
        <div className='Cards'>{children}</div>
    </>)
}
