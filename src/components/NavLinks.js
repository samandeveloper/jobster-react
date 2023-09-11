//we use this file in both big and small screens for sidebar (including stats, All Jobs, Add Job, profile)
import { NavLink } from "react-router-dom";
import links from "../utils/Links";
// import { toggleSidebar } from "../features/user/userSlice";

const NavLinks = ({ toggle }) => {
  //pass the toggleSidebar which is the reducer in userSlice.js
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, id, path, icon } = link; //bring the properties we want from the link
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
            key={id}
            onClick={toggle}
            end //in new react-router-dom version adding 'end' is sometimes necessary
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
