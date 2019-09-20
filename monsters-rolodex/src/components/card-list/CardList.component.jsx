import React from 'react';
import './CardList.styles.css'

export const CardList = (props) => {
    console.log(props)
    return (
        <ul className={'cardList'}>{props.children}</ul>
    )
}