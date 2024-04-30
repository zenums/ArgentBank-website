import Accounts from '../components/profil/accounts'
import '../components/profil/profil.css'

function Profil() {
  return (
    <div className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <Accounts title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
      <Accounts title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
      <Accounts title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
    </div>
  )
}
export default Profil