import "./cover.css";
import { Link } from "react-router-dom";
import CoverImg from "../../../src/assets/cover.png"


export default function Cover() {
  return (
    <div className="cover">
      <nav className="c-topbar">
        <div className="tbleft">
          <ul>
            <li className="logo">
              <Link to="">pmpara</Link>
            </li>
            <li>
              <Link to="explore">Explore</Link>
            </li>
            <li>
              <Link to="write">Discuss</Link>
            </li>
          </ul>
        </div>
        <div className="tbright">
          <div className="joinus">
            <Link to="joinus">Join Us!</Link>
          </div>
          <div>
            <Link to="login">Sign in</Link>
          </div>
        </div>
      </nav>
      <header>
        <div className="c-headerLeft">
          <h2>You don't have to prepare alone.</h2>
          <h3>
            Start, share and grow your career in Product Management by learning
            in public.
          </h3>
          <button>Start now</button>
        </div>
        <div className="c-headerRight">
          <img src={CoverImg} alt="" />
        </div>
      </header>
      <main>
        <div className="c-module">
          <div>
            Why wonder how good your customer journey map is when you can get
            feedback from friends?
          </div>
        </div>
        <div className="c-module">
          <div>
            Skim through some interview experiences before you start preparing.
          </div>
        </div>
        <div className="c-module">
          <div>
            See what people are taking about in the Product world. Engage in
            valuable discussions with peers.
          </div>
        </div>
      </main>
    </div>
  );
}
