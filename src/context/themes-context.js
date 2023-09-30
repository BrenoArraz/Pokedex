import { createContext, useEffect, useState } from 'react'

export const themes = {
  light: {
    color: '#000000',
    backgroundImage: 'url(https://i.imgur.com/IBqcbGZ.jpg)',
    backgroundColor: '#eedada',
    image: 'url(https://i.imgur.com/oStZbqB.png)'
    
  },
  dark: {
    color: '#ffffff',
    backgroundImage: 'url(https://i.imgur.com/CUGzw7p.png)',
    backgroundColor: '#6f6262',
    image: 'url(https://i.imgur.com/4jTwIEF.png)'
  }
}

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {

    localStorage.setItem("theme", "dark-theme");
    return "dark-theme";
  } else {
    return theme;
  }
};

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {

  const [ isDark, setIsDark ] = useState(false);
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDark));
    setIsDark(!isDark);
  };

  useEffect(() => {
    const isDark = localStorage.getItem('isDark') === 'true'
    setIsDark(isDark)
  }, [])

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme ]}>
      {props.children}
    </ThemeContext.Provider>
  )
}

// export const ThemeContext = createContext({});


// export const ThemeProvider = (props) => {
  
//   const [ theme, setTheme ] = useState(themes.dark)
  
//   localStorage.setItem('theme', JSON.stringify())

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {props.children}
//     </ThemeContext.Provider>
//   )
// }

