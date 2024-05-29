import React, { useState, useEffect } from "react";

const items = [
  "Marketplace",
  "Forems",
  "Blogs",
  "Products",
  "Technology",
  "Community",
];

const TextRotator = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-4 rounded-md flex flex-col justify-center items-center overflow-hidden">
      <span className="inline-flex ml-2 flex-col h-auto sm:h-auto overflow-hidden">
        <ul className="block text-left font-rubik text-lg sm:text-3xl leading-tight animate-text-slide">
          <li className=" text-gray-900">Welcome to Next Gen {items[index]}</li>
        </ul>
      </span>
    </div>
  );
};

export default TextRotator;
