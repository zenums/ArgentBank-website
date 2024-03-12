import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import "./Login.css"

function Login() {
  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
        <h1>Sign In</h1>
        <form>
            
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          
        </form>
      </section>
    </div>
  )
}

export default Login