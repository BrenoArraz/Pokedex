import React, { useContext, useEffect, useState } from 'react'
import { getPokemons } from '../../api'
import { colorTypes } from '../themes/theme-type'
import { Card, H1, Img, Info, LiCard, TypesCard } from './card-styled'
import { ThemeContext } from '../../context/themes-context'


export const CardPokemon = props => {

  
  const { name } = props
  const [pokemon, setPokemon] = useState({})
  const [{ theme }] = useContext(ThemeContext)
 

  useEffect(() => {
    const fetchPokemon = async () => {
      const result = await getPokemons(name)
      setPokemon(result)
    }
    fetchPokemon()
  }, [name])
  
  

  return (
    <Card >
  
      <Info className="info" theme={theme}>
        <H1>{pokemon.name}</H1>
        <h3>n° {pokemon.id}</h3>
      </Info>

      <Img src={pokemon.sprites?.other['official-artwork'].front_default} />

      <TypesCard>
        {pokemon.types?.map((element, index) => (
          <LiCard key={index} style={{ background: colorTypes[element.type.name] }}>
            {element.type.name}
          </LiCard>
        ))}
      </TypesCard>
      
    </Card>
  )
}
