import React from "react";
import './App.css';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Navbar from "./Components/Nav";
import About from "./Components/About";
import Nopage from './Components/Nopage';
import { Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Navbar/>}/>
          <Route index exact element={<Home/>}/>
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
          <Route path='*' element={<Nopage/>}/>
      </Routes>
    </div>
  );
           
}

export default App;
