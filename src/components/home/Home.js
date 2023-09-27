import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner'
export default function Home({ addToCart }) {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const products = async () => {
      try {
        const response = await fetch("https://react-project-77c23-default-rtdb.firebaseio.com/products.json");
        const data = await response.json();

        if (data) {
          const dataArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          setFetchedData(dataArray);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    products();
  },);

  if (!fetchedData.length) {
    return (
      <div className=" font-bold flex justify-center items-center mt-52 text-pink-500">
        <span className="text-[4rem]">Loading</span>
        <span className="mt-6 max-md:w-32">
          <ThreeDots
            height="80"
            width="130"
            color="#FF1493"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </span>
      </div>
    )
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center justify-center flex-wrap -m-4">
          {fetchedData.map((items) => {
            return (
              <div
                key={items.id}
                className=" lg:w-72 mx-2 my-2 shadow-lg md:w-1/2 p-4 w-full"
              >
                <Link
                  href={`/AllProducts/${items.id}`}
                  className="relative rounded overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="img h-[36vh] m-auto transition-transform hover:transform hover:scale-110"
                    src={items.productImages}
                  />
                </Link>
                <div className="flex items-center justify-between">
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {items.title}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {items.productDetails}
                    </h2>
                    <p className="mt-1">{'$'}<span className="font-semibold">{`${items.productPrize}`}</span></p>
                  </div>
                  <div className="flex items-center">
                    <button onClick={() => {
                      addToCart(Home, 1, items.title, items.productPrize);
                    }} className="bg-pink-500 text-white px-3 py-1 rounded-full hover:bg-pink-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
