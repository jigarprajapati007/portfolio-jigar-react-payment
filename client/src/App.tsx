import Headers from './components/Headers.tsx';
import Home from './components/Home.tsx';
import CartDetails from './components/CartDetails.tsx';
import './AppStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import Sucess from './components/Sucess.tsx';
import Cancel from './components/Cancel.tsx';
import React from 'react';

function App() {
  return (
    <>
     <Headers />
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
      <Route  path='/sucess' element={<Sucess />}/>
      <Route  path='/cancel' element={<Cancel />}/>
     </Routes>
     <Toaster />
    </>
  );
}

export default App;
