import React from "react";

import Hero from "../components/Hero";
import ListToolbar from "../components/ListToolbar";
import ProductListItem from "../components/Product/index";
// Redux
import { useSelector } from "react-redux";

function Home() {
  const { products } = useSelector((state) => state.Product);

  console.log(products);
  // TODO: Only get 8 products from api, when the user goes to view all grab all
  return (
    <section>
      <Hero featured={products.featured[0]} />
      <ListToolbar name={"featured"} />
      <section class="bg-white py-8">
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {products.featured &&
            products.featured.map((data, index) => {
              return index < 8 ? (
                <ProductListItem
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  description={data.description}
                  image={data.image}
                  price={data.price}
                />
              ) : (
                <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  View All Products
                </button>
              );
            })}
        </div>
      </section>
    </section>
  );
}

export default Home;
