import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MusicaList from '../components/MusicaList'
import MusicaForm from '../components/MusicaForm'
import './App.css'

function App() {
  

    return (
      <Router>
      <div className="App">  
        <h1>Músicas</h1>
       <nav className="menu"> 
          <ul className="nav-menu">
          <li>       
            <Link to="/">Listar músicas</Link>
          </li>
          <li>
            <Link to="/form">Cadastrar nova música</Link>
          </li>
          </ul>
        </nav>




      <Routes>
        <Route path="/" element={<MusicaList />} />
        <Route path="/form" element={<MusicaForm />} />
      </Routes>

    </div>
    </Router>
  )
}

export default App
