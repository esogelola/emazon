import React from "react";
import { Link } from "react-router-dom";

function Slide({ featured, id }) {
  return (
    <>
      <input
        className="carousel-open"
        type="radio"
        id={`carousel-${id}`}
        name="carousel"
        aria-hidden="true"
        hidden=""
        checked="checked"
      />
      <div className="carousel-item absolute opacity-0">
        <div
          className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
          style={{
            height: "32rem",
            backgroundImage: `url(
             ${
               featured
                 ? featured.image
                 : "https://via.placeholder.com/1600x1080?text=Loading..."
             }
            )`,
          }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
              <h1 className="text-black text-2xl my-4">{featured.title}</h1>
              <Link
                className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                to="/products"
              >
                products
              </Link>
            </div>
          </div>
        </div>
      </div>
      <label
        htmlFor="carousel-3"
        className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
      >
        ‹
      </label>
      <label
        htmlFor="carousel-2"
        className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
      >
        ›
      </label>
    </>
  );
}

export default Slide;
