import { useDispatch } from "react-redux";
import { setUserRX } from "../services/redux/user";
import { useQuery } from "react-query";
import Username from "../features/profil/user/username";
import Accounts from "../features/profil/accounts";
import { post } from "../services/axios";
import Loading from "../components/loading/loading";
import Error from "../components/error/error";
import "../features/profil/profil.css";

function Profil() {
  const dispatch = useDispatch();

  const { isLoading, error } = useQuery(post("user/profile", {}), {
    onSuccess: (data) => {
      dispatch(setUserRX(data));
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="main bg-dark">
      <Username />
      <Accounts
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Accounts
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Accounts
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </div>
  );
}
export default Profil;
