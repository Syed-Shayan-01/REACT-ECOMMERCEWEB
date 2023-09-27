/* eslint-disable array-callback-return */
import React, { useEffect, useRef, useState } from 'react';
import Logo from '../logo/Logo';
import Button from '../button/Button';
import {
    AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle,
    AiOutlineMenu, AiOutlineShoppingCart
} from 'react-icons/ai'
import { MdCancel, MdDeleteForever } from 'react-icons/md'
import List from '../list/List';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [CartData, setCartData] = useState([]);
    const [Auth, setAuth] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const products = async () => {
            try {
                const response = await fetch("https://react-project-77c23-default-rtdb.firebaseio.com/products.json");
                const data = await response.json();

                if (data) {
                    const dataArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                    setCartData(dataArray);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        products();
    },);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuth(user);
            } else {
                setAuth(null);
            }
        });
    },)

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setAuth(null);
                navigate('/login')
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };
    const ref = useRef();
    const crtControl = () => {
        if (ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-full");
            ref.current.classList.add("translate-x-0");
        } else if (!ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-0");
            ref.current.classList.add("translate-x-full");
        }
    };

    const increaseQuantity = (item) => {
        const updatedCart = [...CartData];
        const itemIndex = updatedCart.findIndex(i => i.id === item.id);
        updatedCart[itemIndex].quantity += 1;
        setCartData(updatedCart);
    };

    const decreaseQuantity = (item) => {
        console.log(`Decreasing quantity for item with id ${item.id}`);
        const updatedCart = [...CartData];
        const itemIndex = updatedCart.find(i => i.id === item.id);
        if (updatedCart[itemIndex].quantity > 1) {
            updatedCart[itemIndex].quantity -= 1;
        }
        setCartData(updatedCart);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = CartData.find(item => item.id !== itemId);
        setCartData(updatedCart);
    };
    return (
        <nav className="flex shadow-xl items-center justify-between flex-wrap p-6">
            <div className="flex items-center mr-6 lg:mr-72">
                <Logo text={"ECOMMERCE.COM"} />
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <ol>
                        <li>
                            <AiOutlineMenu
                                className={` text-black font-semibold text-lg hover:text-blue-400 ${isOpen ? "hidden" : "block"
                                    }`}
                            />
                        </li>
                        <li>
                            <AiFillCloseCircle
                                className={` text-black font-semibold text-lg hover:text-blue-400 ${isOpen ? "block" : "hidden"
                                    }`}
                            />
                        </li>
                    </ol>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
                    }`}
            >
                <div className="flex  max-md:flex-col lg:flex-grow" >
                    {Auth && <Link to={'/dashboard'}> <List itemText={"Dashboard"} /></Link>}
                    <Link to={'/home'}><List itemText={"Home"} /></Link>
                    <List itemText={"Products"} />
                </div>

                <div
                    onClick={crtControl}
                    className="SideBar cursor-pointer text-xl items-center"
                >
                    <AiOutlineShoppingCart />
                </div>

                {/* Side Bar */}

                <div
                    ref={ref}
                    className="w-96 z-10 absolute rounded right-0 top-20 bg-pink-200 
        transform px-7 py-10 
        translate-x-full transition-transform"
                >
                    <h2 className="text-xl font-bold text-center">Shopping Cart</h2>
                    <span
                        onClick={crtControl}
                        className="text-lg absolute top-3 right-3 cursor-pointer"
                    >
                        <MdCancel />
                    </span>
                    {CartData.length === 0 && <div className='p-4 font-bold'>Your Cart is Empty!</div>}
                    <ol className="list-decimal">
                        {CartData.map((item) => (
                            <li key={item.id}>
                                <div className="flex items-start mt-9 mr-2">
                                    <div className="w-2/3 text-start font-semibold">
                                        {item.title}
                                    </div>
                                    <div className="inline-flex items-center justify-center">
                                        <AiFillMinusCircle
                                            className="mr-2 cursor-pointer"
                                            onClick={() => decreaseQuantity(item)}
                                        />
                                        {item.quantity}
                                        <AiFillPlusCircle
                                            className="ml-2 cursor-pointer"
                                            onClick={() => increaseQuantity(item)}
                                        />
                                    </div>
                                </div>
                                <div className="font-thin mt-2 flex items-center ">
                                    <span className="font-semibold">Price: ${item.productPrize * item.quantity}</span>
                                    <button
                                        className="absolute right-24 text-lg text-pink-500 ml-3 hover:text-black rounded hover:bg-pink-300 p-2"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <MdDeleteForever />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <button className=" text-white ml-3 bg-pink-500 rounded-md p-2 mt-3">
                        <Link href={`/CheckOut/CheckOut`}>Check Out</Link>
                    </button>

                    <button
                        className="text-white ml-3 bg-pink-500 rounded hover:bg-pink-300 p-2 mt-3"
                    >
                        Clear Cart
                    </button>
                </div>
                {/* Login Button */}
                {Auth && <button onClick={handleSignOut} >sign Out</button>}

                {!Auth && <Link to={'/login'}>
                    <Button>Login</Button>
                </Link>}

            </div>
        </nav >
    );
}
export default Navbar;