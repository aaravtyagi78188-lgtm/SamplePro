import "./Main.css";

function Main() {
  return (
    <main className="main-section" id="services">

      <h2>Our Services</h2>

      <p className="main-description">
        We provide modern web development services.
      </p>

      <div className="service-container">

        <div className="service-card">
          <h3>Web Design</h3>

          <p>
            We create beautiful and modern
            website designs.
          </p>
        </div>

        <div className="service-card">
          <h3>React Development</h3>

          <p>
            We build fast and responsive
            React applications.
          </p>
        </div>

        <div className="service-card">
          <h3>Responsive Design</h3>

          <p>
            Websites that work perfectly
            on mobile and desktop.
          </p>
        </div>

      </div>

    </main>
  );
}

export default Main;