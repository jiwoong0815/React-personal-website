import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Card/>
    </div>
  );
}

export default App;
