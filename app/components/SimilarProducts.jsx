"use client";

import { useEffect, useState } from "react";
import ProductComp from "./Product";
import { BiLoader } from "react-icons/bi";

export default function SimilarProducts() {
  //  const products = [
  //    {
  //      id: 1,
  //      price: 1212,
  //      url: "https://picsum.photos/id/23",
  //      title: "Brown lether bag",
  //      description:
  //        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //    },
  //    {
  //      id: 2,
  //      price: 2542,
  //      url: "https://picsum.photos/id/27",
  //      title: "nike shoes",
  //      description:
  //        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //    },
  //    {
  //      id: 3,
  //      price: 2000,
  //      url: "https://picsum.photos/id/24",
  //      title: "suite bag",
  //      description:
  //        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //    },
  //    {
  //      id: 6,
  //      price: 2000,
  //      url: "https://picsum.photos/id/93",
  //      title: "suite bag",
  //      description:
  //        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //    },
  //    {
  //      id: 5,
  //      price: 2000,
  //      url: "https://picsum.photos/id/24",
  //      title: "suite bag",
  //      description:
  //        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //    },
  //  ];
  const [products, setProducts] = useState([]);

  const getRandomProducts = async () => {
    try {
      const response = await fetch("/api/products/get-random");
      const result = await response.json();

      if (result) {
        setProducts(result);
        return;
      }

      setProducts([]);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    getRandomProducts();
  }, []);

  return (
    <>
      <div>
        <div className='border-b py-1 max-w-[1200px] mx-auto' />

        <div className='max-w-[1200px] mx-auto'>
          <div className='font-bold text-2xl py-2 mt-4'>Similar sponsored items</div>

          {products.length > 0 ? (
            <div className='grid grid-cols-5 gap-4'>
              {products.map((product) => (
                <ProductComp key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className='flex items-center justify-center'>
              <div className='flex items-center justify-center gap-4 font-semibold'>
                <BiLoader size={30} className='text-blue-400 animate-spin' />
                Loading Products...
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
