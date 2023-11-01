import { useParams, NavLink } from "react-router-dom";
import { data } from "./productsData";
import { HomePage } from "./HomePage";

export const ProductPage = () => {
  const { productId } = useParams();

  const selectedData = data.products.find(
    (product) => product.id === Number(productId)
  );
  return (
    <div className="product-page-container">
      <NavLink to="/" className="back-button">
        Back
      </NavLink>
      <div>
        <img alt="product" className="product-image" src={selectedData.image} />
      </div>
      <div className="product-details">
        <p className="product-name">{selectedData.name}</p>
        <p className="product-description">{selectedData.description}</p>
        <p className="product-price">Price: {selectedData.price}</p>
        <p className="product-category">Category: {selectedData.category}</p>
        <p className="product-ratings">Ratings: {selectedData.ratings}</p>
        <p className="product-reviews">Reviews: {selectedData.reviews}</p>
        <a className="product-website" href={selectedData.website}>
          Visit Website
        </a>
      </div>
    </div>
  );
};
