import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Access from "../views/access";

export const PrivateRoute = function({element}) {

//   const user = useSelector(function(state) {
//     return state.user;
//   });

//   const isLogin = user.islogin;

  const isLogin = true;

  if (isLogin) {
    return element;
  } else {
    return <Access/>;
  }
};