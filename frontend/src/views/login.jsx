import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Form from "../features/login/form"
import "../features/login/login.css"

function Login() {
  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
        <h1>Sign In</h1>
        <Form/>
      </section>
    </div>
  )
} 

export default Login