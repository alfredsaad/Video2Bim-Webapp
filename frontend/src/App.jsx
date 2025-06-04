import {Routes,Route} from 'react-router-dom';
import React from 'react';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Test from './pages/Test';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {
  return (
  <div>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
        
    </Routes>
  </div>

  )
}

export default App
