import "./userAvatar.css";
import { NavLink } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserAvatar({firstname}) {
  return (
    <NavLink className="main-nav-item" to="./sign-in">
      <FontAwesomeIcon icon={faUserCircle} />
      {firstname}
    </NavLink>
  );
}
