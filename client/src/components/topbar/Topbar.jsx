import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="tbleft">
            <ul>
                <li className="logo">pmpara</li>
                <li>Explore</li>
                <li>Post</li>
            </ul>
        </div>
        <div className="tbright">
            <ul>
                <li>Join Us!</li>
                <li className="profile">
                    <i class="fa fa-user"></i>
                </li>
            </ul>
        </div>
    </div>
  )
}
