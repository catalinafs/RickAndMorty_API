import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Status } from '../Status/Status';

const CardDetails = () => {
    const [fetchData, setFetchData] = useState([]);
    const { id } = useParams();
    const { image, name, gender, origin, location, species, status } = fetchData;

    const api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            setFetchData(data);
        })()
    }, [api])

    return (
        <div className='CardDetails'>
            <div className='image'>
                <img src={image} className='characterImageDetails' alt={name} />
            </div>
            <div className='info'>
                <h2 className='Name'>{name}</h2>
                <Status status={status} />
                <h2>Gender: <span>{gender}</span></h2>
                <h2>Species: <span>{species}</span></h2>
                <h2>Location: <span>{location?.name}</span></h2>
                <h2>Origin: <span>{origin?.name}</span></h2>
            </div>
        </div>
    );
}

export default CardDetails;
