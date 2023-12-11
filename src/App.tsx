// import { useState } from 'react'

import { Establishment } from "./pages/Establishment";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login"
import { Vehicle } from "./pages/Vehicle";
import { GlobalSyle } from "./styles/global"

import {UserProvider } from './contexts/user';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {

  return (
    <UserProvider>
      <GlobalSyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/establishments" element={<Establishment/>} />
          <Route path="/vehicles" element={<Vehicle/>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

