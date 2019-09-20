import React from 'react';
import './Card.styles.css'

export const Card = (props) => {
    return (
        <li className={'cardContainer'}>
            <img alt="moster" src={`https://robohash.org/${props.id}?set=set2&size=180x180`}></img>
            <h3>{props.name}</h3>
            <p>{props.mail}</p>
        </li>
    )
}