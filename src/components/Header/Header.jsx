import "./Header.css";
import logo from "../../assets/anit-logo.png";
import bg from "../../assets/header-background.png";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  const getNavClass = ({ isActive }) =>
    isActive ? "nav__link nav__link--active" : "nav__link";

  return (
    <header className="header" style={{ backgroundImage: `url(${bg})` }}>
      <div className="header__inner">
        <div className="header__logo">
          <img src={logo} alt="Anita Prozac" className="header__image" />
        </div>

        <div className="header__right">
          <nav className="nav">
            <NavLink to="/" end className={getNavClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={getNavClass}>
              About
            </NavLink>
            <NavLink to="/booking" className={getNavClass}>
              Booking
            </NavLink>
            <NavLink to="/timeline" className={getNavClass}>
              Timeline
            </NavLink>
          </nav>

          <div className="socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="socials__link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="socials__link"
            >
              <FaTiktok />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="socials__link"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
