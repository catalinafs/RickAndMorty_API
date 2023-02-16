import React, { useEffect, useState } from "react";
import { LoadingPage } from "../LoadingPage/LoadingPage.jsx";
import { Pagination } from "../Pagination/Pagination.jsx";
import { Cards } from "../CardsContainer/CardsContainer.jsx";

import './Card.css';
import { Link } from "react-router-dom";

export function Card() {
    const [fetchData, setFetchData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { results } = fetchData

    const urlApi = `https://rickandmortyapi.com/api/character/?page=${page}`

    useEffect(() => {
        (async () => {
            setLoading(true)

            let api = await fetch(urlApi)
                .then((data) => data.json())
                .catch(() => {
                    setError(true)
                });

            setFetchData(api);

            setLoading(false);
        })();
    }, [urlApi]);


    if (loading) return (<>
        <LoadingPage />
    </>)

    if (error) return (<>ERROR:404(the page is not returning the data)</>)

    return (
        <div className='App'>

            <div className="ContainerPagCards">

                <Pagination page={page} setPage={setPage} />

                <Cards>
                    {
                        results?.map((character) => {
                            const {
                                id,
                                name,
                                status,
                                image
                            } = character

                            return (
                                <Link to={`${id}`} key={id} className="card">
                                    <div className="image">
                                        <img src={image} className='characterImage' alt={name} loading="lazy" />
                                    </div>
                                    <div className="info">
                                        <h3 className="Name">{name}</h3>
                                        <h3>Status: <span>{status}</span></h3>
                                    </div>
                                </Link>
                            )
                        })}
                </Cards>

                <Pagination page={page} setPage={setPage} />
            </div>

        </div>
    );

    
}