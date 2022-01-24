import React from 'react';
import './App.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
