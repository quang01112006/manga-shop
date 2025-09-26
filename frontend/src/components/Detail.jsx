import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Detail.css";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  function getPriceForBook(id) {
    return 20000 + (id % 100) * 1000;
  }

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(`https://api.jikan.moe/v4/manga/${id}`);
        const json = await res.json();
        const item = json.data;
        setBook({
          title: item.title,
          cover: item.images?.webp?.image_url ?? "",
          price: getPriceForBook(item.mal_id),
          synopsis: item.synopsis || "No description available",
        });
      } catch (err) {
        console.error("Error fetching detail:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading || !book) return <div className="loader">Loading...</div>;

  return (
    <div className="detail-container">
      <button className="btn-back" onClick={() => navigate(-1)}>
        Back
      </button>

      <div className="detail-card">
        <img src={book.cover} alt={book.title} className="detail-img" />
        <div className="detail-info">
          <h2 className="detail-title">{book.title}</h2>
          <p className="detail-price">{book.price.toLocaleString("vi-VN")}₫</p>
          <p className="detail-synopsis">{book.synopsis}</p>
          <button className="btn btn-cart">
            <FaShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
