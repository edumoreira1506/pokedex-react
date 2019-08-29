import React, { Component } from 'react'
import Pokedex from './../pokedex/Pokedex'

export default class Pokegame extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'eletric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
  }

  render() {
    const hand1 = []
    const hand2 = [...this.props.pokemons]

    while(hand1.length < hand2.length) {
      const randomIndex = Math.floor(Math.random() * hand2.length)
      const randomPokemon = hand2.splice(randomIndex, 1)[0]
      hand1.push(randomPokemon)
    }

    const xp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
    const xp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)

    return (
      <div>
        <Pokedex pokemons={hand1} xp={xp1} isWinner={xp1 > xp2} />
        <Pokedex pokemons={hand2} xp={xp2} isWinner={xp2 > xp1} />
      </div>
    )
  }
}
