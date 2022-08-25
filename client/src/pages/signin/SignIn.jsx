import "./signIn.css"

export default function SignIn() {
  return (
    <div className="signin">
      <div className="si-container">
        <div className="si-logo">pmpara</div>
        <form className="si-writeform">
          <div className="si-writeFormGroup">
            <input
              className="si-input"
              placeholder="Username or Email"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className="si-writeFormGroup">
            <input
              className="si-password"
              placeholder="Password"
              type="text"
            ></input>
          </div>
          <div>
            <button className="si-button" type="submit">
              Sign In
            </button>
          </div>
          <div className="si-signup">Sign Up</div>
          <div className="si-signUpOptions">
            <p>Or Sign In with</p>
            <div className="si-options">
              <div className="si-google">
                <i class="fa fa-google"></i> Google
              </div>
              <div className="si-linkedin">
                <i class="fa fa-linkedin"></i> LinkedIn
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
