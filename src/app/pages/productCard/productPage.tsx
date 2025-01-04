"use client"

import { useState } from "react";
import ProductCard from "./productCard"; // Adjust the path as necessary

const products = [
  {
    image: "/product1.png",
    title: "HAVIT HV-G92 Gamepad",
    badge: "-40%",
    badge1: " ",
    badge2: " ",
    badgeColor: "white",
    badgeColor1: "#DB4444",
    price: "$120",
    originalPrice: "$160",
    rating: ""
  },
  {
    image: "/product2.png",
    title: "HAVIT HV-G92 Gamepad",
    badge: "-35%",
    badge1: " ",
    badge2: " ",
    badgeColor: "white",
    badgeColor1: "#DB4444",
    price: "$120",
    originalPrice: "$160",
    rating: ""
  },
  {
    image: "/product3.png",
    title: "HAVIT HV-G92 Gamepad",
    badge: "-30%",
    badge1: " ",
    badge2: " ",
    badgeColor: "white",
    badgeColor1: "#DB4444",
    price: "$120",
    originalPrice: "$160",
    rating: ""
  },
  {
    image: "/product4.png",
    title: "HAVIT HV-G92 Gamepad",
    badge: "-25%",
    badge1: " ",
    badge2: " ",
    badgeColor: "white",
    badgeColor1: "#DB4444",
    price: "$120",
    originalPrice: "$160",
    rating: ""
  },
  {
    image: "/product4.png",
    title: "HAVIT HV-G92 Gamepad",
    badge: "-20%",
    badge1: " ",
    badge2: " ",
    badgeColor: "white",
    badgeColor1: "#DB4444",
    price: "$120",
    originalPrice: "$160",
    rating: ""
  },
  {
    image: "/product1.png",
    title: "HAVIT HV-G92 Gamepad",
    badge: "-40%",
    badge1: " ",
    badge2: " ",
    badgeColor: "white",
    badgeColor1: "#DB4444",
    price: "$120",
    originalPrice: "$160",
    rating: ""
  },
  {
    image: "/product2.png",
    title: "HAVIT HV-G92 Gamepad",
    badge: "-35%",
    badge1: " ",
    badge2: " ",
    badgeColor: "white",
    badgeColor1: "#DB4444",
    price: "$120",
    originalPrice: "$160",
    rating: ""
  },
  {
    image: "/product3.png",
    title: "HAVIT HV-G92 Gamepad",
    badge: "-30%",
    badge1: " ",
    badge2: " ",
    badgeColor: "white",
    badgeColor1: "#DB4444",
    price: "$120",
    originalPrice: "$160",
    rating: ""
  },
];

const ProductPage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="relative">
      {/* Product Cards */}
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(startIndex / itemsPerPage) * 100}%)`,
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="w-1/4 ml-10 mt-10 flex-shrink-0 "
              style={{ flexBasis: "1%" }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg disabled:opacity-50"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        disabled={startIndex + itemsPerPage >= products.length}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg disabled:opacity-50"
      >
        ❯
      </button>
    </div>
  );
};

export default ProductPage;
