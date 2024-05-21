import Text from "../../components/input/text/text";
import Checkbox from "../../components/input/checkbox/checkbox";
import { useState } from "react";
import Button from "../../components/button/button";
import { handleSubmit, handleChange } from "../../utils/formHelper";
import Password from "../../components/input/password/password";
import { useMutation } from "react-query";
import { post } from "../../services/axios";
import { useDispatch } from "react-redux";
import { setUserRX } from "../../services/redux/user";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";

export default function form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRefMail = useRef();
  const inputRefpassword = useRef();
  const ArrRef = [inputRefMail, inputRefpassword];

  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    email: "tony@stark.com",
    password: "password123",
  });

  const { mutate } = useMutation(() => post("user/login", user), {
    onSuccess: (data) => {
      dispatch(
        setUserRX({
          email: user.email,
          token: data.body.token,
          isLogin: true,
        })
      );
      navigate("/profil");
    },
    onError: (error) => {
      console.error(error);
      setError(true);
    },
  });

  useEffect(() => {
    if (error) {
      ArrRef.forEach((ref) => {
        ref.current.classList.add("error");
        setTimeout(() => {
          ref.current.classList.remove("error");
          setError(false);
        }, 500);
      });
    }
    if (!error) return;
  }, [error]);

  return (
    <form className="login" onSubmit={(e) => handleSubmit(e, mutate)}>
      <div className="input-wrapper" ref={inputRefMail}>
        <Text
          value={user.email}
          name={"email"}
          label={"E-mail"}
          onChange={(e) => handleChange(e, setUser)}
        />
      </div>
      <div className="input-wrapper" ref={inputRefpassword}>
        <Password
          value={user.password}
          name={"password"}
          label={"Password"}
          onChange={(e) => handleChange(e, setUser)}
        />
      </div>
      <div className="input-remember">
        <Checkbox
          label="Remember me"
          value={user.remember}
          name={"remenber"}
          onChange={(e) => handleChange(e, setUser)}
        />
      </div>
      <Button variant="primary" type="submit">
        Login
      </Button>
      {error && <div className="error-message">Mot de passe / Email incorrect</div>}
    </form>
  );
}
