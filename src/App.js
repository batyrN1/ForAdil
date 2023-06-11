import React, {useContext, useState } from 'react'

import { CounterContext } from './context/CounterContext'
import {CounterDisplay } from './pages/CounterDisplay/CounterDisplay'
import { CounterProvaider } from './pages/CounterProvaider/CounterProvaider'

import './App.css'


function App() {

 return (
  <div className='app'>
   <CounterProvaider>
    <CounterDisplay />
   </CounterProvaider>
   </div>
 )
}

export default App
