import React, { Component } from 'react'
import Pokedex from './../pokedex/Pokedex'

import Pokemon from './../../services/Pokemon'

export default class Pokegame extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemons: []
    }

    Pokemon.all().then(result => {
      const pokemons = result.map((pokemon, index) => {
          return {
            name: pokemon.name,
            id: index + 1,
            xp: Math.floor(Math.random() * 150 + 1)
          }
        }
      )

      this.setState({ pokemons })
    })
  }

  render() {
    const hand1 = []
    const hand2 = [...this.state.pokemons]

    while(hand1.length < hand2.length) {
      const randomIndex = Math.floor(Math.random() * hand2.length)
      const randomPokemon = hand2.splice(randomIndex, 1)[0]
      hand1.push(randomPokemon)
    }

    const xp1 = hand1.reduce((exp, pokemon) => exp + pokemon.xp, 0)
    const xp2 = hand2.reduce((exp, pokemon) => exp + pokemon.xp, 0)

    return (
      <div>
        <Pokedex pokemons={hand1} xp={xp1} isWinner={xp1 > xp2} />
        <Pokedex pokemons={hand2} xp={xp2} isWinner={xp2 > xp1} />
      </div>
    )
  }
}
