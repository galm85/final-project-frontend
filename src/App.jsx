import React from 'react';
import './App.css';
import { Switch,Route } from "react-router-dom";

//components
import Navbar from './components/navbar';
import Footer from './components/footer';
import Register from './components/register';
import Home  from "./components/home";



function App() {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <header>
        <Navbar />
      </header>

      <main className="flex-fill">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/register" component={Register} />

        </Switch>

      </main>
      
      <footer className="mt-3"><Footer /></footer>
    </div>
  );
}

export default App;
