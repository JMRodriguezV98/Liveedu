import React, { Component } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import FirstSection from '../container/FirstSection'
import Home from '../container/Home'
import Load from '../container/Load'
import Register from '../container/Register'

class AppRoutes extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Load/>}/>
                <Route path='/primero' element = {<FirstSection/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}

export default AppRoutes