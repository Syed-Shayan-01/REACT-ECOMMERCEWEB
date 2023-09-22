import React, { useState } from 'react';
import Logo from '../logo/Logo';
import Button from '../button/Button';
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai'
import List from '../list/List';
import { Link } from 'react-router-dom';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex shadow-xl items-center justify-between flex-wrap p-6">
            <div className="flex items-center mr-6 lg:mr-72">
                <Logo text={"Blogger.Com"} />
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

                {/* Login Button */}
                <span>
                    <Button btnText={"Login"} />
                </span>


            </div>
        </nav>
    );
}
export default Navbar;