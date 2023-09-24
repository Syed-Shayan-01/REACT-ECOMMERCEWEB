import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/DashBoard/Dashboard';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
