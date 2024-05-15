import Text from "../../components/input/text/text";
import Checkbox from "../../components/input/checkbox/checkbox";
import { useState } from "react";
import Button from "../../components/button/button";
import { handleSubmit, handleChange } from "../../utils/formHelper";
import Password from "../../components/input/password/password";
export default function form() {


  const [user, setUser] = useState({
    email: "tony@stark.com",
    password: "password123",
    remember: false,
  });

  // gerer le cas d'erreur

  return (
    <form className="login">
      <div className="input-wrapper ">
        <Text
          value={user.email}
          name={"email"}
          label={"E-mail"}
          onChange={(e) => handleChange(e, setUser)}
        />
      </div>
      <div className="input-wrapper ">
        <Password
          value={user.password}
          name={"email"}
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
      <Button variant="primary" type="submit">Login</Button>
    </form>
  );
}
