import ProductCard from "./ProductCard";
import "./CategoryRow.css";

export default function CategoryRow({ title, books }) {
  return (
    <>
      <div className="category-section">
        <div className="category-header">{title}</div>
        <div className="scroll-row">
          {books.map((b) => (
            <ProductCard key={b.id} product={b} />
          ))}
        </div>
      </div>
    </>
  );
}
