import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-subtitle">
          Welcome to My Website
        </p>

        <h1>
          Build Modern
          <br />
          Websites With React
        </h1>

        <p className="hero-description">
          We create modern, fast and responsive
          websites using React JavaScript.
        </p>

        <button className="hero-btn">
          Explore Now
        </button>

      </div>

      <div className="hero-right">
        <div className="hero-box">
      
        </div>
      </div>

    </section>
  );
}

export default Hero;