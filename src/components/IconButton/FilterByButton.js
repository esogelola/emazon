import React from "react";
import { Menu, Transition } from "@headlessui/react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function FilterByButton({ filterBy, handleChange }) {
  // Can move this higher up in the architecture

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full shadow-sm  py-2 font-medium text-gray-700 hover:bg-gray-50 ">
          <svg
            className="fill-current hover:text-black "
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {filterBy.map((data, key) => {
              return (
                <Menu.Item key={key}>
                  {({ active }) => (
                    <button
                      onClick={handleChange}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {data}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default FilterByButton;
