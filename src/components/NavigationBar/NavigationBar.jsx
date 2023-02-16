import React from 'react'
import './NavigationBar.css'
import { NavLink, Link } from 'react-router-dom'
import Buscar from '../Buscar/Buscar.jsx';

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
      <Buscar />
      <div className='ButtonsContainer'>
        <NavLink to='/' className='button'>Home</NavLink>
        <NavLink to='/Coders' className='button'>Coder</NavLink>
        <NavLink to='/Document' className='button'>Doc</NavLink>
      </div>
    </div>
  )
}

export default NavigationBar
