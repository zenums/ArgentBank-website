import { useSelector } from "react-redux";
import Access from "../views/access";

export const PrivateRoute = function ({ element }) {
  const user = useSelector((state) => {
    return state.user;
  });

  const isLogin = user.isLogin;


  if (isLogin) {
    return element;
  } else {
    return <Access />;
  }
};
