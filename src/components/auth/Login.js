/* eslint-disable no-unused-vars */
import { Link, } from "react-router-dom";
// import Logo from "../logo/Logo";
import { useState } from "react";
import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
export default function Example() {
    const [Email, setEmail] = useState('')
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(Email, password)

        signInWithEmailAndPassword(auth, Email, password)
            .then((userCredential) => {
                navigate('/')
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9
                    tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={(e) => { formSubmit(e) }}>
                        <div>    {/* Email Form */}
                            <label htmlFor="email" className="block text-sm font-medium leading-6
                             text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={Email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5
                                    text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300
                                    placeholder:text-gray-400 
                                    focus:outline-pink-400  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>   {/* End Email Form */}

                        {/* Password Form */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium
                                         leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link to="#" className="font-semibold text-pink-600
                                    hover:text-pink-500">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => { setpassword(e.target.value) }}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5
                                    text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300
                                    placeholder:text-gray-400 
                                    focus:outline-pink-400  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* End Password Form */}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md
                                        bg-pink-600 px-3 py-1.5 text-sm font-semibold
                                        leading-6 text-white shadow-sm hover:bg-pink-500
                                        focus-visible:outline focus-visible:outline-2 
                                        focus-visible:outline-offset-2
                                        focus-visible:outline-pink-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Do you have an account ?{' '}
                        <Link to="/signup" className="font-semibold leading-6 text-pink-600
                        hover:text-pink-500">
                            Sign up
                        </Link>
                    </p>
                </div>

            </div>
        </>
    )
}