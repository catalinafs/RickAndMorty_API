import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import { Cards } from '../CardsContainer/CardsContainer';
import { Status } from '../Status/Status';

export const Character = ({ characters }) => {
    return (
        <Cards>
            {
                characters?.map((character) => {
                    const {
                        id,
                        name,
                        status,
                        image
                    } = character;

                    return (
                        <Link to={`${id}`} key={id} className='card'>
                            <div className='image'>
                                <img src={image} className='characterImage' alt={name} loading='lazy' />
                            </div>
                            <div className='info'>
                                <h3 className='Name'>{name}</h3>
                                <Status status={status} />
                            </div>
                        </Link>
                    );
                })
            }
        </Cards>
    );
}

export const CharacterMemorizado =  memo(Character);