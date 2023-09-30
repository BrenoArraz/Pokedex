import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PokedexPage } from './pokedex'
import { Pokemon } from './pokemon'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PokedexPage />} />
        <Route exact path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
