import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '../button/button';
import { useDispatch } from "react-redux";
import { resetUser } from "../../services/redux/user";

export default function () {

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(resetUser());
  }
  
  return (
    <Button variant="tertiary" name="Sign Out" onClick={logout}>
      <FontAwesomeIcon icon={faSignOutAlt} />
      Sign out
    </Button>
  );
}
