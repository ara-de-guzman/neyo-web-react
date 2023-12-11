import "./ComponentStyle.css";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

function Header() {
  return (
    <header className="header-component">
      <div className="logo">
        <Link to="/">
          <p>N</p>
        </Link>
      </div>
      <SocialMedia />
      <div className="nav">
        <Link to="/work">
          <span>My Work</span>
        </Link>
        <Link to="/contact">
          <span>Message Me</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
