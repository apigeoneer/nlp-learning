import "./cover.css";
import { Link } from "react-router-dom";
import CoverImg from "../../../src/assets/cover.png";
import Mindmap from "../../../src/assets/mindmap.png";
import CoverLine1 from "../../../src/assets/coverline1.png";
import CoverLine2 from "../../../src/assets/coverline2.png";

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
          <h2>
            You don't have to{" "}
            <div className="c-prepareAlone">prepare alone.</div>
          </h2>
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
        <div className="c-modulesContainer">
          <div className="c-leftModule">
            <img src={CoverLine1} alt="" />
            <img src={CoverLine2} alt="" />
          </div>
          <div className="c-rightModule">

            <div className="c-module1">
                <div className="c-moduleHeading">
                  <h3>Get feedback on your work</h3>
                </div>
                <div className="c-moduleContent">
                  <div className="c-modulePara">
                    Why wonder how well you did with that interview assignment
                    when you can get quick feedback from peers?
                  </div>
                  <div className="c-moduleImg">
                    <img src={Mindmap} alt="" />
                  </div>
                </div>
            </div>
            
            {/* <div className="c-module">
              <div className="c-moduleImg">
                <img src={Leap} alt="" />
              </div>
              <div className="c-moduleText">
                Skim through some interview experiences before you start
                preparing.
              </div>
            </div> */}
            {/* <div className="c-module">
              <div className="c-moduleImg">
                <img src={Discuss} alt="" />
              </div>
              <div className="c-moduleText">
                See what people are taking about in the Product world. Engage in
                valuable discussions with peers.
              </div>
            </div> */}
            {/* <div className="c-module2">
                <div className="c-moduleHeading">
                  <h3>Get feedback on your work</h3>
                </div>
                <div className="c-moduleContent">
                  <div className="c-modulePara">
                    Why wonder how well you did with that interview assignment
                    when you can get quick feedback from peers?
                  </div>
                  <div className="c-moduleImg">
                    <img src={Mindmap} alt="" />
                  </div>
                </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
