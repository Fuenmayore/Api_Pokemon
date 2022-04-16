import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../navegacion/Navbar'
import Inicio from '../paginas/Inicio'
import Pokemon from '../paginas/Pokemon'
import App from '../paginas/App'




const inicio = () => {
  return(
   
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/" element={<Pokemon />} />
        <Route path="/app" element={<App />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default inicio