import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Button from '../button/Button';
const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [productPrize, setProductPrize] = useState('');
  const [productImages, setProductImages] = useState('');
  const [productDetails, setProductDetails] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && productDetails && productImages && productPrize) {
      const response = await fetch("https://react-project-77c23-default-rtdb.firebaseio.com/products.json",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, productDetails, productImages, productPrize })
        });
      if (response.ok) {
        toast.success('Items Added Successfuly', {
          position: "top-right",
          autoClose: 1400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTitle('');
        setProductDetails('');
        setProductImages('');
        setProductPrize('');
      }
    }

  }
  return (
    <>
      <form className='lg:p-32 p-20' onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="text-xl text-gray-600">
            Title <span className="text-red-400">*</span>
          </label>
          <br />
          <input
            type="text"
            className="border-[1px] rounded-md border-gray-300 focus:outline-pink-400 p-2 w-full"
            placeholder="Blog Title"
            name="title"
            id="title"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
            required
          />
        </div>

        <div className='flex flex-col mb-2 md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <label className="text-xl text-gray-600">
                Product Prize <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder='10000$'
                value={productPrize}
                onChange={(e) => { setProductPrize(e.target.value) }}
                id="productPrize"
                name="productDetails"
                className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-pink-400
                           focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none
                           text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative">
              <label className="text-xl text-gray-600">
                Product Images <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={productImages}
                onChange={(e) => { setProductImages(e.target.value) }}
                className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-pink-400
                           focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none
                           text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-xl text-gray-600">
            Product <span className="text-red-400">*</span>
          </label>
          <br />
          <input
            type="text"
            className="border-[1px] rounded-md border-gray-300 focus:outline-pink-400 p-2 w-full"
            placeholder="Product Details"
            name="productDetails"
            id="productDetails"
            value={productDetails}
            onChange={(e) => { setProductDetails(e.target.value) }}
            required
          />
        </div>

        <div className="flex p-1">
          <button className="bg-pink-500 py-2 px-4 border-[1.4px] cursor-pointer
            hover:border-black duration-300 rounded-md text-white hover:text-black
            hover:bg-white w-full text-center">{"Hello"}</button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default Dashboard



// pages/ImageUploadForm.js

// pages/ImageForm.js

