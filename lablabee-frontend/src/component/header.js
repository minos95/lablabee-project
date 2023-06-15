import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="header-list">
        <li>
          <NavLink className="header-link" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="header-link" to="/labs">
            Labs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
