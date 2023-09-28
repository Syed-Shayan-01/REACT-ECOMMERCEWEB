import { useEffect, useState } from "react";
import CartContext from "./CartContext"

const CartState = (props) => {
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
            subt += newCart[keys[i]].productPrize * newCart[keys[i]].qty;
        }
        setSubTotal(subt);
    };

    const addToCart = (itemCode, qty, title, productPrize, color) => {
        let myCart = JSON.parse(JSON.stringify(Cart));

        if (itemCode in Cart) {
            myCart[itemCode].qty = myCart[itemCode].qty + qty;
        } else {
            myCart[itemCode] = { qty: 1, title, productPrize, color };
        }
        setCart(myCart);
        saveCart(myCart);
    };

    const clearCart = () => {
        setCart({});
        saveCart({});
    };


    const deleteCart = (itemCode, qty, productPrize, title, color) => {
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
    return (
        <CartContext.Provider value={{ Cart, addToCart, clearCart, deleteCart, SubTotal }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState