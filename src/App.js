import React from "react";
import  "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Header from "./Components/Header";
function App() {
  return (
    <div className="container">
      <Router>
          <Navbar/>
          <Routes>
          <Route path ="/Clickme" exact element={<Content/>}></Route>
          <Route path ="/Clickmetoo"  element={<Header/>}></Route>
          </Routes>
      </Router>
     
    </div>
  );
}

export default App;
