import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="main access">
      <h1>Cette page n'existe pas !</h1>
      <Link to="/sign-in">Se connecter</Link>
    </div>
  );
}
