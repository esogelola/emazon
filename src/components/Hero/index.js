import React from "react";
import { Link } from "react-router-dom";

function Hero({ featured, loaded }) {
  console.log(featured);

  if (!loaded)
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  return (
    <section
      className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
      style={{
        height: "32rem",
        backgroundImage: `url(
       ${featured[0].image}
      )`,
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
          <h1 className="text-black text-2xl my-4">{featured[0].title}</h1>
          <Link
            className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
            to="/products"
          >
            products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
