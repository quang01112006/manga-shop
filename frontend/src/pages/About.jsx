import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about__card">
        <h1 className="about__title">🔥 M4U — Manga For U</h1>
        <p className="about__lead">
          Welcome to <strong>M4U</strong> — your cozy spot for manga and good
          vibes. Whether you're collecting, binge-reading, or just curious,
          we've got something that’ll hook you.
        </p>

        <h2 className="about__subtitle">Why shop with M4U?</h2>

        <ul className="about__list">
          <li>
            🚚 <strong>Free nationwide shipping</strong> — no surprise fees,
            just more manga.
          </li>
          <li>
            🎨 <strong>Massive selection</strong> — action, romance, horror,
            comedy, slice of life… if it exists, we probably stock it.
          </li>
          <li>
            💸 <strong>Friendly prices</strong> — big titles, fair deals.
          </li>
          <li>
            🔄 <strong>Weekly restocks & new drops</strong> — never run out of
            things to read.
          </li>
          <li>
            🎁 <strong>Exclusive bundles & perks</strong> — members get the good
            stuff.
          </li>
        </ul>

        <p className="about__cta">
          Click, grab, and get lost in a great story.{" "}
          <strong>M4U — made for manga fans like you.</strong>
        </p>
      </div>
    </section>
  );
}
