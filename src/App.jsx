import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='row'>
        <Home></Home>
        <SideCart></SideCart>
      </div>
    </div>
  );
};

export default App;