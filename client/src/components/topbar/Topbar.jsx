import "./topbar.css"
import { Link } from "react-router-dom"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="tbleft">
            <ul>
                <li className="logo">
                    <Link to="">pmpara</Link>
                </li>
                <li>
                    <Link to="">Explore</Link>
                </li>
                <li>
                    <Link to="write">Discuss</Link>
                </li>
            </ul>
        </div>
        <div className="tbright">
            <div className="joinus">
                <Link to="joinus" >Join Us!</Link>
            </div>
            <div>
                <Link to="profile">
                    <div className="profileimg">
                        <i class="fa fa-user"></i>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="signup">Sign up</Link>
            </div>
        </div>
    </div>
  )
}
