import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function loadGenres() {
      const res = await fetch("https://api.jikan.moe/v4/genres/manga");
      const json = await res.json();
      const unique = json.data.reduce((arr, current) => {
        if (!arr.some((item) => item.name === current.name)) {
          arr.push(current);
        }
        return arr;
      }, []);
      setGenres(unique);
    }

    loadGenres();
  }, []);
  return (
    <>
      <nav>
        <img className="logo" src="./images/logo.png"></img>
        <ul>
          <li className="nav">
            <Link to="/">HOME</Link>
          </li>

          <li className="dropdown">
            <span className="nav">GENRES</span>
            <ul className="dropdown-menu">
              <div className="genres-list">
                {genres.map((g, idx) => (
                  <li key={g.mal_id + "-" + idx}>
                    <Link to={`/genres/${g.mal_id}`}>{g.name}</Link>
                  </li>
                ))}
              </div>
            </ul>
          </li>
          <li className="nav">
            <Link to="/cart">CART</Link>
          </li>
          <li className="nav">
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
