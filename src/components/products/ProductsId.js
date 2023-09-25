// import { AiFillStar } from "react-icons/ai";


// const ProductsId = () => {
//     return (
//         <>
//             <section className="text-gray-600 body-font overflow-hidden">
//                 <div className="container mt-10 px-5 py-24 mx-auto">
//                     <div className="lg:w-4/5 mx-auto justify-center items-center space-x-24 flex flex-wrap">
//                         <img
//                             alt="ecommerce"
//                             className="lg:h-[50vh] h-[50vh] rounded"
//                             src={''}
//                         />
//                         <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                             <h2 className="text-sm title-font text-gray-500 tracking-widest">
//                                 {product.name}
//                             </h2>
//                             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//                                 {product.name}
//                             </h1>
//                             <div className="flex items-center space-x-2">
//                                 <div className="text-black font-semibold">ratings</div>
//                                 <span className="text-sm text-gray-600">
//                                     <AiFillStar />
//                                 </span>
//                                 <span className="text-sm text-gray-600">
//                                     <AiFillStar />
//                                 </span>
//                                 <span className="text-sm text-gray-600">
//                                     <AiFillStar />
//                                 </span>
//                                 <span className="text-sm text-gray-600">
//                                     <AiFillStar />{" "}
//                                 </span>
//                             </div>
//                             <p className="leading-relaxed">{product.desc}</p>
//                             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//                                 <div className="flex">
//                                     <span className="mr-3">color</span>
//                                     {product.color === "Black" && (
//                                         <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
//                                     )}
//                                     <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
//                                     <button className="border-2 border-gray-300 ml-1 bg-gray-500 rounded-full w-6 h-6 focus:outline-none"></button>
//                                 </div>
//                                 <div className="flex ml-6 items-center">
//                                     <span className="mr-3">Size</span>
//                                     <div className="relative">
//                                         <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-500 text-base pl-3 pr-10">
//                                             <option>SM</option>
//                                             <option>M</option>
//                                             <option>L</option>
//                                             <option>XL</option>
//                                         </select>
//                                         <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
//                                             <svg
//                                                 fill="none"
//                                                 stroke="currentColor"
//                                                 strokeLineCap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 className="w-4 h-4"
//                                                 viewBox="0 0 24 24"
//                                             >
//                                                 <path d="M6 9l6 6 6-6"></path>
//                                             </svg>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex">
//                                 <span className="title-font font-medium text-2xl text-gray-900">
//                                     {product.price}
//                                 </span>
//                                 <button
//                                     className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded"
//                                 >
//                                     Add to Cart
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default ProductsId