"use client";

import { useEffect, useState } from "react";
import CarouselComp from "./components/CarouselComp";
import Product from "./components/Product";
import MainLayout from "./layouts/MainLayout";
import useIsLoading from "@/app/hooks/useIsLoading";

export default function Home() {
  //  const products = [
  //   {
  //     id: 1,
  //     price: 1212,
  //     url: "https://picsum.photos/id/23",
  //     title: "Brown lether bag",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //   },
  //   {
  //     id: 2,
  //     price: 2542,
  //     url: "https://picsum.photos/id/27",
  //     title: "nike shoes",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //   },
  //   {
  //     id: 3,
  //     price: 2000,
  //     url: "https://picsum.photos/id/24",
  //     title: "suite bag",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //   },
  // ];
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    useIsLoading(true);

    const response = await fetch("/api/products");
    const prods = await response.json();

    setProducts([]);
    setProducts(prods);
    useIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <MainLayout>
        <CarouselComp />

        <div className='max-w-[1200px] mx-auto'>
          <div className='text-2xl font-bold mt-4 mb-6 px-4'>Products</div>

          <div className='grid grid-cols-3 gap-1 md:grid-cols-5 md:gap-4 '>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
}

