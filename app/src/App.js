import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Header } from './components/Header';

import { productsAction } from './redux/actions'; 

import './App.css';

 
function App() {
  const dispatch = useDispatch();

  useState(() => {
    dispatch(productsAction())
  }, [])

  return (<>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} /> 
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App; 