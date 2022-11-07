import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import Home from "./pages";
import Sidebar from "./Components/Sidebar";
import Challenges from "./pages/challenges";
import Login from "./pages/login"
import Ideas from "./pages/ideas";
import Signup from "./pages/signup";
import About from "./pages/about";
import Discover from "./pages/discover";
import ICDetails from "./pages/icdetails"



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path='/' exact  element={<Home />} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/challenges' exact element={<Challenges/>} />
        <Route path='/ideas' exact element={<Ideas/>} />
        <Route path='/discover' exact element={<Discover/>} />
        <Route path='/signin' exact element={<Login/>} />
        <Route path='/signup'exact element={<Signup/>} />
        <Route path='/icdetails/:id/:type' element={<ICDetails /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
