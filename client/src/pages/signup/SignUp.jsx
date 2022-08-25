import "./signUp.css";

export default function SignUp() {
  return (
    <div className="signup">
      <div className="su-container">
        <div className="su-logo">pmpara</div>
        <form className="su-writeform">
          <div className="su-writeFormGroup">
            <input
              className="su-input"
              placeholder="Username"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className="su-writeFormGroup">
            <input
              className="su-input"
              placeholder="Email"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className="su-writeFormGroup">
            <input
              className="su-password"
              placeholder="Password"
              type="text"
            ></input>
          </div>
          <div className="su-writeFormGroup">
            <input
              className="su-confirmPassword"
              placeholder="Confirm password"
              type="text"
            ></input>
          </div>
          <div>
            <button className="su-button" type="submit">
              Sign Up
            </button>
          </div>
          <div className="su-other">
            <div>Forgot password?</div>
            <div>Sign In</div>
          </div>
          <div className="su-signUpOptions">
            <p>Or Sign Up with</p>
            <div className="su-options">
              <div className="su-google">
                <i class="fa fa-google"></i> Google
              </div>
              <div className="su-linkedin">
                <i class="fa fa-linkedin"></i> LinkedIn
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
