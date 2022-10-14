import React from 'react'
import AddEvent from './pages/AddEvent'
import AllEvents from './pages/AllEvents'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
     <BrowserRouter>
<Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path='/addEvent' element={<AddEvent/>}/>
     <Route path='/allEvent' element={<AllEvents/>}/>
    
  </Routes>
</BrowserRouter>
    </div>
  )
}
