// import { useState } from 'react'

import { Home } from "./pages/Home";
import { Login } from "./pages/Login"
import { GlobalSyle } from "./styles/global"

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {

  return (
    <>
      <GlobalSyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/teste" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

