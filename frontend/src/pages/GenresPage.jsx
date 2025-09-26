import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "./GenresPage.css";

export default function GenresPage({ addToCart }) {
  const { genreId } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  function getPriceForBook(id) {
    return 20000 + (id % 100) * 1000;
  }

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.jikan.moe/v4/manga?genres=${genreId}&limit=24&order_by=score&sort=desc`
        );
        const json = await res.json();
        const mapped = (json.data || []).map((item) => ({
          id: item.mal_id,
          title: item.title,
          cover: item.images?.webp?.image_url ?? "",
          price: getPriceForBook(item.mal_id),
        }));
        setBooks(mapped);
      } catch (err) {
        console.error("Error fetching by genre:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [genreId, currentPage]);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <img src="/images/loading.png" alt="" />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="genres-container">
          {books.map((b) => (
            <ProductCard key={b.id} product={b} addToCart={addToCart} />
          ))}
        </div>
      )}
      <div className="genres-pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => setCurrentPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
}
