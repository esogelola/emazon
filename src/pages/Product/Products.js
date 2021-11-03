import React from "react";
import ProductListItem from "../../components/Product/index";
export default function Products() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Products
        </h2>
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, id) => {
            return <ProductListItem />;
          })}
        </div>
      </div>
    </div>
  );
}
