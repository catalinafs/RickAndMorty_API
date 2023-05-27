import React from 'react';
import './Status.css';

export const Status = ({ status }) => {
    let elseStatus = status === 'Dead' ? 'Dead' : 'Unknown';
    let ifStatus = status === 'Alive' ? 'Alive' : elseStatus;

    return (
        <div className='AliveDeadUnknown'>
            <span className={`${ifStatus} circleStatus`}>◉</span><h3>{status}</h3>
        </div>
    );
}
