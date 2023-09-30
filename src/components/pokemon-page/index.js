import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../header/header'; 
import { useParams } from 'react-router-dom';
import { getPokemons } from '../../api';
import { colorTypes } from '../themes/theme-type'; 
import { themeBgPokemon} from '../themes/theme-bg-pokemon'; 
import { Abilities, Ability, Bg, BoxImgPoke, Cont, Container, H2Abilities, H2Moves, H2Poke, H3Poke, ImgPoke, InfosPoke, LiAbility, LiMoves, LiPokemon, LinhaH, LinhaV, Moves, MovesBox, SectionPoke, TypesPokedex } from './pokemon-styled';
import { ThemeContext } from '../../context/themes-context';
import { Footer } from '../footer/footer';

export const PokemonPage = (props) => {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams() || props;
  const [{ theme }] = useContext(ThemeContext)
  
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPokemons(name);
        setPokemon(result);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      }
    };
    fetchData();
  }, [name]);

  

  const moves = pokemon.moves?.slice(0, 10);
  const firstType = pokemon.types?.[0]?.type?.name;

  return (
    
    <body>
     
      
      <SectionPoke theme={ theme }>
      <Header /> 
        <div>
          {pokemon ? (
            <Cont> 
              <Container >
                <Bg style={{ backgroundImage: themeBgPokemon[firstType] }}>
                </Bg>

                <BoxImgPoke>
                  <ImgPoke
                    src={pokemon.sprites?.other['official-artwork'].front_default} alt={pokemon.name}
                  />
                </BoxImgPoke>
               
                  <InfosPoke>
                    <H2Poke>{pokemon.name}</H2Poke>
                    <H3Poke>n° {pokemon.id}</H3Poke>

                    <TypesPokedex>
                      {pokemon.types?.map((element, index) => (
                        <LiPokemon
                          key={index}
                          style={{ background: colorTypes[element.type.name] }}
                        >
                          {element.type.name}
                        </LiPokemon>
                      ))}
                    </TypesPokedex>
                  </InfosPoke>
                  <LinhaV />
                  <div className='media'>
                  <LinhaH />
                  <Abilities>
                    <H2Abilities>Abilities</H2Abilities>
                    <Ability>
                      {pokemon.abilities?.map((abilit, index) => (
                        <LiAbility key={index}>{abilit.ability.name}</LiAbility>
                      ))}
                    </Ability>
                  </Abilities>
                  </div>
              </Container>

              <MovesBox theme={ theme }>
                <H2Moves theme={ theme }>Moves</H2Moves>
                <Moves>
                  {moves?.map((move, index) => (
                    <LiMoves theme={ theme } key={index}>{move.move.name}</LiMoves>
                  ))}
                </Moves>
              </MovesBox>
            </Cont>
          ) : (
            <p> Pokemon not found </p>
          )}
        </div>
        < Footer />
      </SectionPoke>
      </body>
  );
};
















/*import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../header/header'
import { useParams } from 'react-router-dom'
import { getPokemons } from '../../api'
import './pokemon-page.css'
import { colorTypes } from '../themes/theme-type'
import { themeBgPokedex, themeBgPokemon } from '../themes/theme-bg-pokedex'


export const PokemonPage = props => {
  const [pokemon, setPokemon] = useState({})
  const { name } = useParams() || props

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPokemons(name)
      setPokemon(result)
    }
    fetchData()
  }, [name])

  const moves = pokemon.moves?.slice(0, 10)
  const firstType = pokemon.types?.[0].type.name


  return (
    <>
      <Header />
      <section>
        <div>
          {pokemon ? (
            <container className='cont'>
              
              <div className="container">
               <div className='bg' style={{ backgroundImage: themeBgPokedex[firstType] }}>
               </div>

                <div className="img">
                  <img
                    src={pokemon.sprites?.other['official-artwork'].front_default} alt={pokemon.name}
                  />
                </div>
                <div className="box">
                  <div className="infos">
                    <h2>{pokemon.name}</h2>
                    <h3>n° {pokemon.id}</h3>

                    <div className="types-pokedex">
                      {pokemon.types?.map((element, index) => (
                        <li
                          key={index}
                          style={{ background: colorTypes[element.type.name] }}
                        >
                          {element.type.name}
                        </li>
                      ))}
                    </div>
                  </div>
                  <div className="linha" />
                  <div className="abilities">
                    <h2>Abilities</h2>
                    <div className="ability">
                      {pokemon.abilities?.map((abilit, index) => (
                        <li key={index}>{abilit.ability.name}</li>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
              
              
              <div className="moves-box">
                <h2>Moves</h2>
                <div className="moves">
                  {moves?.map((move, index) => (
                    <li key={index}>{move.move.name}</li>
                  ))}
                </div>
              </div>
            </container>
          ) : (
            <p> Pokemon not found </p>
          )}
        </div>
      </section>
    </>
  )
}*/
