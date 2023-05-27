import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className='NavigationBar'>
      <Link to='/' className="NavBarContainer">
        <img
          className='RickAndMortyImage'
          src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'
          alt='RickAndMortyImage'
        />
      </Link>

      <SearchBar />

      <div className='ButtonsContainer'>
        <NavLink to='/' className='button'>Home</NavLink>
        <NavLink to='/Coders' className='button'>Coders</NavLink>
        <NavLink to='/Document' className='button'>Docs</NavLink>
      </div>
    </div>
  );
}

export default NavigationBar;
