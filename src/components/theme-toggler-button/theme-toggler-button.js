import React, { useContext, useEffect } from 'react'
import { ThemeContext, themes } from '../../context/themes-context'
import { Button } from '../button/button'

export const ThemeTogglerButton = () => {
  const [{ theme }, toggleTheme] = useContext(ThemeContext)

 

  return (
    <div>
      <Button onClick={() => toggleTheme(theme === themes.light ? themes.dark : themes.light)}></Button>
    </div>
  )
}