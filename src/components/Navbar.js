//in the dashboard page we have 2 column. This is the navbar on the top including J icon, hamburger icon, Dashboard text and blue button
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa"; //from react icon library
import Logo from "./Logo"; //J logo
import { useState } from "react"; //in the navbar, if we click on the name of the user we see logout (this is toggle which we should handel it with local state)
import { useDispatch, useSelector } from "react-redux"; //to bring reducers and initialState from userSlice.js
import {
  toggleSidebar,
  // logoutUser,
  clearStore,
} from "../features/user/userSlice"; //for toggling hamburger icon

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user); //grab the user
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div className="nav-center">
        {/* hamburger icon */}
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            {/* in the user button, we have the user icon, user name and then arrow down icon */}
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          {/* logout button which toggles with the user button - 'show-dropdown' shows the logout on top right dashboard page*/}
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(clearStore("Logging out..."))}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
