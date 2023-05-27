import React, { useEffect, useState, useContext } from 'react';
import { CharacterMemorizado } from './Character.jsx';
import { Context } from '../../context/index.jsx';
import { ErrorPage } from '../ErrorPage/index.jsx';
import { LoadingPage } from '../LoadingPage/LoadingPage.jsx';
import { Pagination } from '../Pagination/Pagination.jsx';
import './Card.css';

export const Card = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const {
        characters,
        setChangeCharacters,
        setCharacters,
    } = useContext(Context);

    const urlApi = `https://rickandmortyapi.com/api/character/?page=${page}`;

    useEffect(() => {
        (async () => {
            setLoading(true)
            let api = await fetch(urlApi)
                .then((data) => data.json())
                .catch(() => {
                    setError(true)
                });
            console.log(api)
            if (api) {
                setCharacters(api.results);
                setChangeCharacters(api.results);
                console.log(api.results)
            } else {
                console.log('object');
            }

            setLoading(false);
        })();
    }, [urlApi]);


    if (loading) return (<>
        <LoadingPage />
    </>);

    if (error) return (<>
        <ErrorPage />
    </>);

    return (
        <div className='App'>
            <div className='ContainerPagCards'>
                <Pagination page={page} setPage={setPage} />

                <CharacterMemorizado characters={characters} />

                <Pagination page={page} setPage={setPage} />
            </div>
        </div>
    );
}