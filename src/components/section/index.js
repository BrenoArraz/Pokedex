import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from '../../context/themes-context'
import { Searchbar } from '../searchbar/searchbar'
import { createPokemonsList, getPokemons } from '../../api'
import { CardPokemon } from '../card/card'
import { Header } from '../header/header'
import { Link} from 'react-router-dom'
import { BtnLoad, BtnLoadButton, DisplayGrid, Main, Pokedex } from './section-style'
import { Footer } from '../footer/footer'


export const Section = () => {
  
  const [{ theme }] = useContext(ThemeContext)
  const [notFound, setNotFound ] = useState(false)
  const [count, setCount] = useState(10)
  const [pokedex, setPokedex] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const response = await createPokemonsList(count)

      setPokedex(response)

    }
    fetchData()
  }, [count])

  const onSearchHandler = async(pokemon) => {
    
    if(!pokemon){
      return createPokemonsList(count)
    } 
      setNotFound(false)
      
    const result = await getPokemons(pokemon)
    if(!result.name){
      setNotFound(true)
    } else {
      setPokedex([result])
    }
    
  }


  return (
    <>
    
      
      <Main theme={ theme }>
      <Header />
      <Searchbar onSearch={onSearchHandler}/>

        <Pokedex>
          <DisplayGrid >
            {pokedex.map((pokemon, index) => (
              <Link className='card-flex' to={`/pokemon/${pokemon.name}`} key={index}>
                <CardPokemon name={pokemon.name} theme={ theme }/>
              </Link>
            ))}
          </DisplayGrid>
        </Pokedex>
        <BtnLoad>
          <BtnLoadButton
            onClick={() => setCount(count + 10)}>
            Load more
          </BtnLoadButton>
            </BtnLoad>
           <Footer />
      </Main>
      
    </>
  )
}
