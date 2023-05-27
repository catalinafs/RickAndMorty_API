import React, { useContext, useState } from 'react';
import { Context } from '../../context';
import './SearchBar.css';

export const SearchBar = () => {
    const [search, setSearch] = useState('');
    const { setCharacters, changeCharacters } = useContext(Context);

    const handleChange = (event) => {
        setSearch(event.target.value);
        if (event.target.value) {
            setCharacters(changeCharacters.filter((character) =>
                character.name.toLowerCase().includes(event.target.value.toLowerCase())
            ));
        } else {
            setCharacters(changeCharacters);
        };
    };

    return (
        <div className='search'>
            <input
                type='text'
                placeholder='Search'
                value={search}
                onChange={handleChange}
            />
            <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-search' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0'></path>
                <path d='M21 21l-6 -6'></path>
            </svg>
        </div>
    );
}
