import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
const Header = () => {
  const errorList = useSelector((state) => state.errorList);
  return (
    <>
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
      {errorList.length > 0 ? (
        <Alert severity="error">{errorList[0]}</Alert>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Header;
