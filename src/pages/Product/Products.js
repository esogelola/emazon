import React, { useState } from "react";
import ProductListItem from "../../components/Product/index";
// Redux
import { useSelector } from "react-redux";
import ListToolbar from "../../components/ListToolbar";

export default function Products({ limit }) {
  const { products } = useSelector((state) => state.Product);

  const [filterProducts, setFilterProducts] = useState(products.products);
  const [filterValue, setFilterValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const filterBy = ["Featured", "Price: Low to High", "Price: High to Low"];

  const handleFilterChange = (e) => {
    setFilterValue(e.target.innerText);
    const sortable = filterProducts;
    var sorted = sortable;

    switch (e.target.innerText.valueOf()) {
      case filterBy[1]:
        sorted.sort((a, b) => {
          if (a.price > b.price) return -1;
          if (a.price < b.price) return 1;
          return 0;
        });

        break;
      case filterBy[2]:
        sorted.sort((a, b) => {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        });

        break;

      default:
        break;
    }

    setFilterProducts(sorted);
  };
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value != "") {
      setFilterProducts(
        products.products.filter((data) => data.title.includes(e.target.value))
      );
    } else {
      setFilterProducts(products.products);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Products
        </h2>
        <ListToolbar
          name={""}
          hasOptions={true}
          handleFilter={handleFilterChange}
          handleSearch={handleSearchChange}
          filterBy={filterBy}
        />
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {filterProducts &&
            filterProducts.map((data, index) => {
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
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  View All Products
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}
