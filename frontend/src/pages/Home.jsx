import ProductCard from "../components/ProductCard";
import Promo from "../components/Promo";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "./Home.css";

export default function Home({ addToCart }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.jikan.moe/v4/manga?page=${currentPage}&limit=24&order_by=score&sort=desc`
        );
        const json = await res.json();

        const mapped = (json.data || []).map((item) => ({
          id: item.mal_id,
          title: item.title,
          cover: item.images?.webp?.image_url ?? "",
          price: (Math.floor(Math.random() * 180) + 20) * 1000,
        }));
        setBooks(mapped);
      } catch (err) {
        console.error("Error fetching manga:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [currentPage]);

  return (
    <div>
      <Hero />
      <Promo></Promo>

      {loading ? (
        <div className="loader">
          <img src="./images/loading.png" alt="" />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="home-container">
          {books.map((b) => (
            <ProductCard key={b.id} product={b} addToCart={addToCart} />
          ))}
        </div>
      )}

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => setCurrentPage((p) => p + 1)}>Next</button>
      </div>

      <div className="phone-icon">
        <a href="tel:99999">
          <FaPhoneAlt size={24} color="#fff" />
        </a>
      </div>
    </div>
  );
}
