import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const CardDetails = () => {

    const { id } = useParams()
    const [fetchData, setFetchData] = useState([]);
    const { image, name, gender, origin, location, species, status } = fetchData

    const api = `https://rickandmortyapi.com/api/character/${id}`
    console.log(location)

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json())
            setFetchData(data)
        })()
    }, [api])

    return (
        <div className='CardDetails'>
            <div className="image">
                <img src={image} className='characterImageDetails' alt={name} loading="lazy" />
            </div>
            <div className="info">
                <h2 className="Name">{name}</h2>
                <h2>Status: <span>{status}</span></h2>
                <h2>Gender: <span>{gender}</span></h2>
                <h2>Species: <span>{species}</span></h2>
                </div>
        </div>
    )
}

export default CardDetails
