import { useState } from "react";
import Text from "../../../components/input/text/text";
import { handleChange } from "../../../utils/formHelper";
import { useSelector } from "react-redux";
import Button from "../../../components/button/button";
import { useDispatch } from "react-redux";
import { setUser } from "../../../services/redux/user";

export default function editUsername() {
  const { firstname, lastname } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstname,
    lastname,
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(setUser(user));
    console.log(firstname);
  };

  return (
    <form className="form-edit-user" onSubmit={(e) => onSubmitForm(e)}>
      <div className="input-wrapper ">
        <Text
          value={user.firstname}
          name={"firstname"}
          label={"First Name"}
          onChange={(e) => handleChange(e, setUser)}
        />
      </div>
      <div className="input-wrapper ">
        <Text
          value={user.lastname}
          name={"lastname"}
          label={"Last Name"}
          onChange={(e) => handleChange(e, setUser)}
        />
      </div>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </form>
  );
}
