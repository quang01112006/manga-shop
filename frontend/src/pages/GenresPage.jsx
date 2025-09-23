import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function GenresPage({ addToCart }) {
  const { genreId } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

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
          price: (Math.floor(Math.random() * 180) + 20) * 1000,
        }));
        setBooks(mapped);
      } catch (err) {
        console.error("Error fetching by genre:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [genreId]);

  return (
    <div className="home-container">
      {loading ? (
        <div className="loader">
          <img src="./images/loading.png" alt="" />
          <p>Loading...</p>
        </div>
      ) : (
        books.map((b) => (
          <ProductCard key={b.id} product={b} addToCart={addToCart} />
        ))
      )}
    </div>
  );
}
