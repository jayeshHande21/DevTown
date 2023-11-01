import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export const HomePage = () => {
  const { sortByPrice, setSortByPrice, updatedData, handleSort } = useContext(
    ProductContext
  );

  const handleSortByPrice = () => {
    setSortByPrice((prevState) => !prevState);
    handleSort();
  };

  return (
    <div className="text-center">
      <h1 className="heading1">
        Easy <span style={{ color: "orange" }}>Breeze</span>{" "}
      </h1>

      <p className="description">
        Enjoy the breezy comfort of our longline tee. Effortlessly chic and
        perfect for creating a relaxed, fashionable look.
      </p>
      <button className="sort-button" onClick={handleSortByPrice}>
        {sortByPrice ? "Unset sort by price" : "Set sort by price"}
      </button>

      <div className="product-container">
        {updatedData.products.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <NavLink to={`/ProductPage/${product.id}`} key={product.id}>
                <img
                  alt="product"
                  className="product-image"
                  src={product.image}
                />
              </NavLink>
              <p className="product-name">{product.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
