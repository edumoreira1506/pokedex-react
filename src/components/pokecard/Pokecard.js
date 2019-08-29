import React, { Component } from 'react'

import './Pokecard.css'

import Numbers from './../../helpers/Numbers'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

export default class Pokecard extends Component {
  render() {
    const imgPath = `${POKE_API}/${Numbers.padToThree(this.props.id)}.png`

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgPath} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.xp}</div>
      </div>
    )
  }
}
