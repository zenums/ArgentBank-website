import Accounts from '../features/profil/accounts'
import '../features/profil/profil.css'
import Username from '../features/profil/user/username'

function Profil() {
  return (
    <div className="main bg-dark">
      <Username />
      <Accounts title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
      <Accounts title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
      <Accounts title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
    </div>
  )
}
export default Profil