import { useState } from "react";
import Text from "../../../components/input/text/text";
import { handleChange, handleSubmit } from "../../../utils/formHelper";
import { useSelector } from "react-redux";
import Button from "../../../components/button/button";
import { useDispatch } from "react-redux";
import { setUserRX } from "../../../services/redux/user";
import { put } from "../../../services/axios";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { useRef } from "react";

export default function editUsername() {
  const { userName, token } = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const inputReUsername = useRef();

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    userName,
  });

  const { mutate } = useMutation(() => put("user/profile", user, token), {
    onSuccess: () => {
      dispatch(setUserRX(user));
    },
    onError: (error) => {
      console.error(error);
      setError(true);
    },
  });

  useEffect(() => {
    if (error) {
      inputReUsername.current.classList.add("error");
      setTimeout(() => {
        inputReUsername.current.classList.remove("error");
        setError(false);
      }, 500);
    }
    if (!error) return;
  }, [error]);

  return (
    <form className="form-edit-user" onSubmit={(e) => handleSubmit(e, mutate)}>
      <div className="input-wrapper" ref={inputReUsername}>
        <Text
          value={user.userName}
          name={"userName"}
          label={"Username"}
          onChange={(e) => handleChange(e, setUser)}
        />
      </div>
      <Button variant="primary" type="submit">
        save
      </Button>
      {error && <div className="error-message">Une erreur est survenue...</div>}
    </form>
  );
}
