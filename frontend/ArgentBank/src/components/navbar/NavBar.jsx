import { NavLink } from "react-router-dom"
import Logo from "../../assets/argentBankLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import "./NavBar.css"

function NavBar() {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to="./sign-in">
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </NavLink>
      </div>
    </nav>
  )
}
export default NavBar