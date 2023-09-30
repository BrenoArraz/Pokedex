import { styled } from "styled-components";

export const Card = styled.div`
display: flex;
flex-direction: column;
box-shadow: 4px 4px 4px #000;
justify-content: center;
align-items: center;
border-radius: 3px;
color: white;
position: relative;
z-index: 1;
background-repeat: no-repeat;
background-size: cover;
opacity: 1;

  &:after {
  content: '';
  background-color: rgb(161, 142, 142);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: .5;
  z-index: -1;
}
`

export const Img = styled.img`
  width: 120px;
  height: 120px;
`

export const Info = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
color: #131111;
font-size: 1.6rem;
color: ${props => props.theme.color}
`

export const H1 = styled.h1`
&:first-letter{
  text-transform: uppercase;
}
`

export const TypesCard = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
margin-bottom: 20px;
align-items: center;
font-size: 1.6rem;
`

export const LiCard = styled.li`
display: flex;
align-items: center;
border: none;
border-radius: 10px;
color: #fff;
padding: 5px 12px;
`