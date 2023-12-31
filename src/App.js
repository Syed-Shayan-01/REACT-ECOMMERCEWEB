import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/DashBoard/Dashboard';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Index from './components/index';
import { useEffect } from 'react';
import CartState from './context/CartState';


function App() {

  useEffect(() => {   // add title in react app
    document.title = 'Ecommerce.com'
  }, [])

  return (
    <div>
      <CartState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </CartState>

    </div>
  );
}

export default App;
