import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1>About M4U</h1>

      <div className="section">
        <p className="question">What's M4U?</p>
        <p className="answer">
          M4U stands for "Manga For U". It's a site where you can explore and
          discover tons of manga.
        </p>
      </div>
      <hr />

      <div className="section">
        <p className="question">Who is it for?</p>
        <p className="answer">
          Anyone who loves manga or wants to find something new to read.
          Beginners or fans, everyone is welcome.
        </p>
      </div>
      <hr />

      <div className="section">
        <p className="question">What can I do here?</p>
        <p className="answer">
          You can browse different manga, check detailed info, see covers and
          summaries, and organize your favorites.
        </p>
      </div>
      <hr />

      <div className="section">
        <p className="question">Why use M4U?</p>
        <p className="answer">
          It's easy to navigate, updated often, and helps you discover manga you
          might not find anywhere else.
        </p>
      </div>
      <hr />

      <div className="section">
        <p className="question">How do I get started?</p>
        <p className="answer">
          Just scroll through the collection, click on any title to see more
          details, and start exploring!
        </p>
      </div>
    </div>
  );
}
