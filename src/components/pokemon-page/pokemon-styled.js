import { styled } from "styled-components";

export const SectionPoke = styled.section`
background-image: ${props => props.theme.backgroundImage};
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
z-index: -1;
min-height: 85vh
`
export const Cont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Container = styled.div`
display: flex;
box-shadow: 4px 4px 4px #000;
border-radius: 10px;
margin-top: 40px;
background-repeat: no-repeat;
background-size: cover;
position: relative;
width: 82vw;
flex-wrap: wrap;
justify-content: center;
align-items: center;
z-index: 10;


@media (max-width: 1232px) {
  justify-content: space-evenly;
}
`

export const Bg = styled.div`
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 100%;
position: absolute;
top: 0; 
left: 0;
opacity: .4;
z-index: -1;
border-radius: 10px;
`

export const BoxImgPoke = styled.div`
  max-width: 350px;

  @media (max-width: 688px){
    width: 45%;
  }
`

export const ImgPoke = styled.img`
width: 100%;
`
export const InfosPoke = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  font-size: 2.5rem;
  align-items: center;
  margin-left:  0px;
  color: #746ab0;
  
  @media (max-width: 688px){
    margin-bottom: 15px;
  }
  `

  export const H2Poke = styled.h2`
  &:first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 688px){
    font-size: 2.5rem;
  }
  `

  export const H3Poke = styled.h3`
  margin-top: 20px;

  @media (max-width: 688px){
    font-size: 2.5rem;
  }
  `

  export const TypesPokedex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  gap: 20px;
  `
  export const LiPokemon = styled.li`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 5px 12px;

  @media (max-width: 688px){
    padding: 3px 8px;
    font-size: 1.8rem;
  }
  `

  export const LinhaV = styled.div`
  height: 250px;
  border-right: 1px solid #000;
  margin-top: 50px;
  padding-left: 90px;

  @media (max-width: 1232px){
    display: none;
  }
  `

  export const LinhaH = styled.hr`
  border: none;
  border-top: 2px solid #000;
  width: 60vw;
  height: 2px;
  display: none;

  @media (max-width: 1232px){
    display: block;
  }
  `

  export const Abilities = styled.div`
  margin-right: 100px;
  margin-left: 100px;
  margin-top: 70px;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1232px){
    margin-top: 15px;
    margin-bottom: 15px;
  }
  `

  export const H2Abilities = styled.h2`
  color: #746ab0;

  @media (max-width: 688px){
    font-size: 2.5rem;
    color: #746ab0;
  }
  `

  export const Ability = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.0rem;
  margin-top: 4rem ;
  gap: 40px;
  padding-bottom: 10px;

  @media (max-width: 688px){
    font-size: 1.5rem;
  }
  `

export const LiAbility = styled.li`
border: none;
border-radius: 10px;
padding: 5px 12px;
background-color: blanchedalmond;

&:first-letter {
  text-transform: uppercase;
}
`

export const MovesBox = styled.div`
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 30px;
margin-bottom: 20px;
align-items: center;
width: 80vw;
color: ${props => props.theme.color};
`

export const Moves = styled.div`
display: flex;
padding: 20px;
gap: 15px;
font-size: 1.6rem;
flex-wrap: wrap;
justify-content: center;
`

export const H2Moves = styled.h2`
background-color: ${props => props.theme.backgroundColor};
border: none;
border-radius: 10px;
padding: 1px 10px;
margin-top: 10px;
font-size: 2rem;
`

export const LiMoves = styled.li`
border: none;
border-radius: 10px;
padding: 5px 12px;
background-color: ${props => props.theme.backgroundColor};
`