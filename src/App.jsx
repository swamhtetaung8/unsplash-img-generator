import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Form from './components/Form'
import ImageContextProvider from './context/ImageContext'
const App = () => {
  return (
    <ImageContextProvider>
      <main>
        <Hero/>
        <Form/>
      </main>
    </ImageContextProvider>
  )
}

export default App
