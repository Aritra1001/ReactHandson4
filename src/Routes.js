import React from 'react';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Student from './Components/Student';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function RoutesComponent() {
  return (
     <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Student' element={<Student/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>

     </>
  )
}
