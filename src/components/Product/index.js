import React from "react";
import { Link } from "react-router-dom";

import { addToCart } from "../../redux/actions/CartAction";
import { useDispatch, useSelector } from "react-redux";
function Product({ id, image, title, price, description }) {
  const dispatch = useDispatch();
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col z-1">
      <Link to={`products/${id}`}>
        <img
          className="hover:grow hover:shadow-lg w-full h-full object-center object-cover lg:w-full lg:h-full"
          src={image}
        />
      </Link>
      <div className="pt-3 flex items-center justify-between">
        <div>
          <p className="text-md text-gray-900">{title}</p>
          <p className="text-sm font-medium text-gray-700">
            {description.slice(0, 30)}...
          </p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  text-gray-500 hover:text-black cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              dispatch(addToCart({ id, image, title, price, description }));
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <svg
            className="h-6 w-6 fill-current text-gray-500 hover:text-black cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
          </svg>
        </div>
      </div>
      <p className="pt-1 text-gray-900">${price}</p>
    </div>
  );
}

export default Product;
