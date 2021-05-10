import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import axios from "axios";
import { AuthContextProvider } from './context/AuthContext';
//tuto navbar/sidebar https://www.youtube.com/watch?v=CXa0f4-dWi4

//Permettre à mes cookies d'etre recupérés depuis le back
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/upload' exact component={Upload} />

      </Switch>
      </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
