import React from 'react';
import './App.css';

//components
import Navbar from './components/navbar';
import Footer from './components/footer';



function App() {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <header>
        <Navbar />
      </header>

      <main className="flex-fill">

      </main>
      
      <footer className="mt-3"><Footer /></footer>
    </div>
  );
}

export default App;
