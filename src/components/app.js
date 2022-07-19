import React from 'react';
import { BiUser } from "react-icons/fa";
import Home from './Home';
import Books from './Books';
import NavBar from './navigation/NavBar';
import Profile from './Profile';
import '../style/main.scss';



function App() {
  return (
    <div className= "app-wrapper">
      <NavBar />
      <Home />
      <Books />
      <Profile />
    </div>
  );
}

export default App;