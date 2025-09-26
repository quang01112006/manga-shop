// import "./ProductCard.css";
// import { FaShoppingCart } from "react-icons/fa";
// export default function ProductCard({ product, addToCart }) {
//   return (
//     <div className="product-card">
//       <div className="img-container">
//         <img src={product.cover} alt={product.title} />
//         <span className="title-overlay">{product.title}</span>
//       </div>

//       <p className="title">{product.title}</p>
//       <p className="price">{product.price.toLocaleString("vi-VN")}₫</p>

//       <div className="action">
//         <button className="btn btn-detail">Detail</button>
//         <button className="btn btn-cart" onClick={() => addToCart(product)}>
//           <FaShoppingCart size={18} />
//         </button>
//       </div>
//     </div>
//   );
// }

import "./ProductCard.css";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <div className="img-container">
        <img src={product.cover} alt={product.title} />
        <span className="title-overlay">{product.title}</span>
      </div>

      <p className="title">{product.title}</p>
      <p className="price">{product.price.toLocaleString("vi-VN")}₫</p>

      <div className="action">
        <button
          className="btn btn-detail"
          onClick={() => navigate(`/detail/${product.id}`)}
        >
          Detail
        </button>
        <button className="btn btn-cart" onClick={() => addToCart(product)}>
          <FaShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}
