import { ThemeProvider } from './context/themes-context'
import { createGlobalStyle } from 'styled-components'
import { AppRoutes } from './pages/routes'


function App() {
  
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-decoration: none;
}

html{
  font-size: 62.5%;
}
`

export default App
