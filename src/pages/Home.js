import React from "react";

import Hero from "../components/Hero";
import ListToolbar from "../components/ListToolbar";
import ProductListItem from "../components/Product/index";

function Home() {
  // Only get 8 products from api, when the user goes to view all grab all
  return (
    <>
      <Hero />
      <ListToolbar />
      <section class="bg-white py-8">
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, id) => {
            console.log(id);
            return id < 8 ? (
              <ProductListItem key={id} />
            ) : (
              <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                View All Products
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
