import React from "react";
import { Link } from "react-router-dom";
function Hero({ featured }) {
  console.log(featured);
  //  Get a
  return (
    <section
      className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
      style={{
        height: "32rem",
        backgroundImage: `url(
         ${featured.image}
        )`,
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
          <h1 className="text-black text-2xl my-4">{featured.title}</h1>
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
