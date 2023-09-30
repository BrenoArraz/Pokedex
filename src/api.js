export const createPokemonsList = async (count) => {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`)
  const list = await response.json()
  return list.results
  
}

export const getPokemons = async (id) => {

      const fetchedId = id.toLowerCase()
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${fetchedId}/`)
      const pokemon = await response.json()
      return await pokemon
  
}


