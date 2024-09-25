import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Books from './pages/books/Books'
import ViewBook from './pages/books/ViewBook'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ToastContainer } from 'react-toastify'
import Characters from './pages/characters/Characters'
import ViewCharacter from './pages/characters/ViewCharacter'
import Houses from './pages/houses/Houses'
import ViewHouse from './pages/houses/ViewHouse'

function App() {

  return (
    <>
    <SkeletonTheme baseColor="rgba(0,0,0,0.1)" highlightColor="rgba(250,250,250,0.1)"  enableAnimation={true} duration={1}>

    <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books' element={<Books/>}/>
    <Route path='/books/:id' element={<ViewBook/>}/>
    <Route path='/characters' element={<Characters/>}/>
    <Route path='/characters/:id' element={<ViewCharacter/>}/>
    <Route path='/houses' element={<Houses/>}/>
    <Route path='/houses/:id' element={<ViewHouse/>}/>
   </Routes>
   <ToastContainer/>
   </SkeletonTheme>
   </>
  )
}

export default App
