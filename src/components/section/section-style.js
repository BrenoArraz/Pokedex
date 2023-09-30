import { styled } from "styled-components";

export const Main = styled.section`
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
background-image: ${props => props.theme.backgroundImage};
position: relative;
`

export const Pokedex = styled.div`
 padding: 30px;

}`

export const DisplayGrid = styled.ul`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  
`


export const BtnLoad = styled.div`

  display: flex;
  justify-content: center;
  padding-bottom: 30px;
}`

export const BtnLoadButton = styled.button` 
  background-color: #0e6f9f;
  border: none;
  border-radius: 10px;
  height: 40px;
  color: #fff;
  padding: 10px 12px;


&:hover{
  cursor: pointer;
}`