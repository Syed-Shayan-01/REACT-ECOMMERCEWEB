import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function Example() {
  const [fetchedData, setFetchedData] = useState([]);
  if (!fetchedData) {
    return <div>Loading ...</div>
  }

  useEffect(() => {
    const fetchData = async () => {
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

    if (fetchedData.length === 0) {
      fetchData();
    }
  }, [fetchedData]);

if (!fetchedData.length) {
  return <div>Loading ...</div>
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
                  <p className="mt-1">{items.productPrize}</p>
                </div>
                <div className=" text-start">{items.color}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
}
