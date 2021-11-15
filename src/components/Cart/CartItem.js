import React from "react";
import {
  subtractQuantity,
  addQuantity,
  removeItem,
} from "../../redux/actions/CartAction";
import { useDispatch, useSelector } from "react-redux";
function CartItem({ id, title, image, quantity, price }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={image} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <span className="text-red-500 text-xs">esogelola</span>
          <p
            onClick={() => dispatch(removeItem({ id }))}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
          >
            Remove
          </p>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <button
          onClick={() => {
            dispatch(subtractQuantity({ id }));
          }}
        >
          <svg
            className="fill-current text-gray-600 w-3 "
            viewBox="0 0 448 512"
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>

        <input
          className="mx-2 border text-center w-10"
          type="text"
          value={quantity}
        />
        <button
          onClick={() => {
            dispatch(addQuantity({ id }));
          }}
        >
          <svg
            className="fill-current text-gray-600 w-3 "
            viewBox="0 0 448 512"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
      </div>

      <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${quantity * price}
      </span>
    </div>
  );
}

export default CartItem;
