import React from "react";

import Hero from "../components/Hero";
import ListToolbar from "../components/ListToolbar";
import ProductListItem from "../components/Product/index";
function Home() {
  return (
    <>
      <Hero />
      <ListToolbar />
      <section class="bg-white py-8">
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
            return <ProductListItem />;
          })}{" "}
        </div>
      </section>
    </>
  );
}

export default Home;
