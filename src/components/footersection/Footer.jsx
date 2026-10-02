import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h2>MyWebsite</h2>

          <p>
            Creating modern websites with React JS.
          </p>
        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

        </div>

      </div>

      <div className="copyright">
        © 2026 MyWebsite. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;