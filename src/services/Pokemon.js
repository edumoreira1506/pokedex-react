import api from './api'

const Pokemon = {
  all: async () => {
    const pokemons = await api.get('pokemon')
    return pokemons.data.results
  }
}

export default Pokemon
