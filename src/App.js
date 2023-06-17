import React from 'react'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import MainHomePage from './pages/MainHomePage'

import BrowseEntertainment from './pages/BrowseEntertainment'
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from 'react-router'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
        <Route path='/category' element={<CategoryPage/>}></Route>
        <Route path='/MainHomePage' element={<MainHomePage/>}></Route>
        <Route path='/browse' element={<BrowseEntertainment />} />
      </Routes>
    </BrowserRouter>
     
  )
}
