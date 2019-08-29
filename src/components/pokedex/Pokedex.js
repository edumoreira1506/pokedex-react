import React, { Component } from 'react'
import Pokecard from './../pokecard/Pokecard'

import './Pokedex.css'

export default class Pokedex extends Component {
  static defaultProps = {
    pokemons: []
  }

  render() {
    const { isWinner, xp, pokemons } = this.props
    let title

    if(isWinner)
      title = <h1 className="Pokedex-winner">Winning hand</h1>
    else
      title = <h1 className="Pokedex-loser">Losing hand</h1>

    return (
      <div className="Pokedex">
        {title}
        <p>Total experience: {xp}</p>
        <div className="Pokedex-cards">
          {
            pokemons.map(pokemon => 
              <Pokecard 
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                xp={pokemon.xp}
              />  
            )
          }
        </div>
      </div>
    )
  }
}
