import React, { useContext } from 'react'
import styled from 'styled-components'
import { Github, Linkedin } from '../icons/react-icons'
import { ThemeContext } from '../../context/themes-context'

export const Footer = () => {
  
  const [{ theme }] = useContext(ThemeContext)

  return (
    <>
      <Foot>
        <Contatos>
        <a href='https://github.com/BrenoArraz' target="_blank">
            <Github theme={theme} />
          </a>
        </Contatos>
        <Contatos>
          <a href="https://www.linkedin.com/in/breno-arraz-6913aa23a/" target="_blank" >
            <Linkedin theme={theme} />
          </a>
        </Contatos>
      </Foot>
    </>
  )
}

const Foot = styled.div`
  height: 106px;
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const Contatos = styled.li`
  text-align: center;
  color: white;
  margin-bottom: 40px;
  cursor: pointer;
  &:hover{
    cursor: pointer;
  }
`

export const ContatosText = styled.p`
  color: white;
  font-size: 1.5rem;
`
