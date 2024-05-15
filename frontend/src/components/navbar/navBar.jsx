import { NavLink } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"; 
import { useSelector } from "react-redux"; 
import Logout from "../logout/logout";
import UserAvatar from "../userAvatar/userAvatar";
import "./navBar.css";

function NavBar() {
  const user = useSelector((state) => state.user);

  const firstname = user.firstname;
  const isLogin = user.isLogin;

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
      </NavLink>
      <div className="login-nav">
        {isLogin ? (
          <>
            <UserAvatar firstname={firstname}/>
            <Logout/>
          </>
        ) : (
          <NavLink className="main-nav-item" to="./sign-in">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
