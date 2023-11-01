import { createContext, useState, useEffect } from "react";
import { data } from "../pages/productsData";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [sortByPrice, setSortByPrice] = useState(false);
  const [updatedData, setUpdatedData] = useState(data);

  const handleSort = () => {
    if (sortByPrice) {
      const sortedData = [...data.products].sort((a, b) => a.price - b.price);
      setUpdatedData({ ...data, products: sortedData });
      console.log(updatedData);
    } else {
      setUpdatedData(data);
    }
  };

  return (
    <ProductContext.Provider
      value={{ sortByPrice, setSortByPrice, updatedData, handleSort }}
    >
      {children}
    </ProductContext.Provider>
  );
};
