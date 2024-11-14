import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.scss";
const Header = (props) => {
  return (
    <header className="react-header">
      <h1>{props.text}</h1>
      <nav>
        {" "}
        <ul>
          <li className="nav-items">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about-us"
            >
              About Us{" "}
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
};
