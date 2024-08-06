import React from 'react'
import { StoreProvider } from './store'
import HomePage from './pages/home-page'

const App = () => {
  return (
    <StoreProvider>
    <HomePage/>
    </StoreProvider>
  )
}

export default App