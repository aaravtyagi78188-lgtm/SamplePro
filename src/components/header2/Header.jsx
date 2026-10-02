import "./Header.css"

function Header(){
    return(
       <header>
    <nav className="navbar">

      <a href="#" className="logo">
        Web<span>Craft</span>
      </a>

    
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

    
      <div className="nav-buttons">
        <a href="#" class="login">Login</a>
        <a href="#" class="signup">Get Started</a>
      </div>

      
      {/* <div className="menu-btn">☰</div> */}

    </nav>
  </header>

    )
}

export default Header;