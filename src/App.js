import React from 'react'
import { StoreProvider } from './store'
import  Router  from './router' 

const App = () => {
  return (
    <StoreProvider>
    <Router/>
    </StoreProvider>
  )
}

export default App