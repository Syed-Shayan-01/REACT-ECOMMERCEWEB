import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/DashBoard/Dashboard';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Index from './components/index';
import { useEffect, useState } from 'react';


function App() {

  const [Cart, setCart] = useState({});
  const [SubTotal, setSubTotal] = useState(0);

  useEffect(() => {
    console.log("This is my Shopping Cart");
    try {
      if (localStorage.getItem("Cart")) {
        setCart(JSON.parse(localStorage.getItem("Cart")));
      }
    } catch (error) {
      console.error({ message: error });
      localStorage.clear();
    }
  }, []);
  const saveCart = (newCart) => {
    localStorage.setItem("Cart", JSON.stringify(newCart));

    let subt = 0;
    let keys = Object.keys(newCart);
    for (let i = 0; i < keys.length; i++) {
      subt += newCart[keys[i]].price * newCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };
  const addToCart = (itemCode, qty, name, price) => {
    let myCart = JSON.parse(JSON.stringify(Cart));

    if (itemCode in myCart) {
      myCart[itemCode].qty = myCart[itemCode].qty + qty;
    } else {
      myCart[itemCode] = { qty: 1, name, price };
    }

    setCart(myCart);
    saveCart(myCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const deleteCart = (itemCode, qty, price, name) => {
    let myCart = JSON.parse(JSON.stringify(Cart));

    if (itemCode in Cart) {
      myCart[itemCode].qty = myCart[itemCode].qty - qty;
    }
    if (myCart[itemCode].qty <= 0) {
      delete myCart[itemCode];
    }
    setCart(myCart);
    saveCart(myCart);
  };

  useEffect(() => {   // add title in react app
    document.title = 'Ecommerce.com'
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar Cart={Cart}
          addToCart={addToCart}
          clearCart={clearCart}
          deleteCart={deleteCart}
          SubTotal={SubTotal} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home Cart={Cart}
            addToCart={addToCart}
            clearCart={clearCart}
            deleteCart={deleteCart}
            SubTotal={SubTotal} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
