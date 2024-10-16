import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Test from './components/Test';
import Footer from './components/Footer';
import CPU from './components/Cpu';
import GPU from './components/Gpu';
import Laptop from './components/Laptop';
import User from './components/User';

function App() {
  return (
    <div className="app">
      <Header />

      <Footer />
    </div>
  );
}

export default App;
