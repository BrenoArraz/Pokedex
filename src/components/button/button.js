import { useContext } from "react"
import { ThemeContext } from "../../context/themes-context"
import './button.css'
import styled from "styled-components"

export const Button = (props) => {

  const [{ theme }] = useContext(ThemeContext)

  return (
    <Btn {...props} 
    style={{backgroundImage: theme.image }}
    />
  )
}

const Btn = styled.button`
width: 30px;
height: 30px;
outline-style: none;
margin-top: 50px;
margin-right: 30px;
background-color: transparent;
/* background-image: url(../../images/sol-.png); */
background-repeat: no-repeat;
background-size: cover;
border: none;
`