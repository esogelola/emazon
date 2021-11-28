import React from "react";

function SlideIndicators() {
  return (
    <ol className="carousel-indicators">
      <li className="inline-block mr-3">
        <label
          htmlFor="carousel-1"
          className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
        >
          •
        </label>
      </li>
      <li className="inline-block mr-3">
        <label
          htmlFor="carousel-2"
          className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
        >
          •
        </label>
      </li>
      <li className="inline-block mr-3">
        <label
          htmlFor="carousel-3"
          className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
        >
          •
        </label>
      </li>
    </ol>
  );
}

export default SlideIndicators;
