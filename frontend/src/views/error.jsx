export default function Error() {
  return (
    <div className="main access">
      <h1>Vous ne pouvez pas accéder à cette page !</h1>
      <Link to="/sign-in">Se connecter</Link>
    </div>
  );
}
