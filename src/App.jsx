
import React from 'react'
import Navbar from './components/NavBar/Navbar'
import '../src/styles/global.css'
// import FoodHeader from './components/FoodHeader/FoodHeader'
import SearchBar from './components/Searchbar/SearchBar'
import CardRecipe from './components/CardRecipe/CardRecipe'
import "../src/styles/global.css"


function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <CardRecipe />
      
    </>
  )
}

export default App
