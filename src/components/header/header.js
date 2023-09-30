import React from 'react'
import { ThemeTogglerButton } from '../theme-toggler-button/theme-toggler-button'
import { Link } from 'react-router-dom'
import { HeaderH, ImgLogo, Logo } from './header-styled'


export const Header = () => {

  const reload = () => {
    window.reload()
  }

  return (
    <HeaderH>
      <Link to={'/'} className='logo' onClick={reload}>
        <Logo>
        <ImgLogo src='https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png' />
        </Logo>
   
      </Link> 
      <ThemeTogglerButton />
      
    </HeaderH>
  )
}


