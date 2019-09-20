import React from 'react';
import {Card} from '../card/Card.component'
import './CardList.styles.css'

export const CardList = (props) => {
    console.log(props)
    return (
        <ul className={'cardList'}>
            {props.monsters.map((monster, monsterId) => {
            return (
              <Card
                key={monsterId}
                id={monsterId}
                name={monster.name}
                mail={monster.email}
              />
            )
          })}
        </ul>
    )
}