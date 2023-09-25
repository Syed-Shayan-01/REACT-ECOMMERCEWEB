import React, { useRef, useState } from 'react';
import Logo from '../logo/Logo';
import Button from '../button/Button';
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdCancel, MdDeleteForever } from 'react-icons/md'
import List from '../list/List';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const signOutSubmit = () => {

        signOut(auth).then(() => {
            navigate('/login')
        }).catch((error) => {
            // An error happened.
        });
    }

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
                    <Link to={'/'}> <List itemText={"Dashboard"} /></Link>
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
                    className="w-96 z-10 h-full absolute rounded right-0 top-20 bg-pink-200 
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
                    <ol className="list-decimal ">
                        <li>
                            <div className="flex items-start mt-9 mr-2">
                                <div className="w-2/3 text-start font-semibold">

                                </div>
                                <div className="inline-flex items-center justify-center">
                                    <AiFillMinusCircle
                                        className="mr-2 cursor-pointer"
                                    />
                                    1
                                    <AiFillPlusCircle
                                        className="ml-2 cursor-pointer"
                                    />
                                </div>
                            </div>
                            <div className="font-thin mt-2 flex items-center ">
                                <span className="font-semibold">Price :</span>
                                <button className=" absolute right-24 text-lg
                                    text-pink-500 ml-3 hover:text-black rounded
                                    hover:bg-pink-300 p-2">
                                    <MdDeleteForever />
                                </button>
                            </div>
                        </li>

                    </ol>

                    <button className=" text-white ml-3 bg-pink-500 rounded-md p-2 mt-3">
                        <Link href={`/CheckOut/CheckOut`}>Check Out</Link>
                    </button>

                    <button
                        className=" text-white ml-3 bg-pink-500 rounded hover:bg-pink-300 p-2 mt-3"
                    >
                        Clear Cart
                    </button>
                </div>
                {/* Login Button */}
                <Link to={'/login'}>
                    <Button>Login</Button>
                </Link>

                <button onClick={signOutSubmit}>sign Out</button>

            </div>
        </nav >
    );
}
export default Navbar;