import "./sidebarList.css"

export default function SidebarList() {
  return (
    <div className="sidebarList">
        <div className="top">
            <div className="title">
                <i class="fa fa-bookmark"></i>
                <span>Bookmarked Posts</span>
            </div>
            <div className="caret">
                <i class="fa fa-angle-down"></i>
            </div>
        </div>
        <div className="list">
            <ul>
                <li>How to become a PM in 90 days!</li>
                <li>How to become a PM in 90 days!</li>
                <li>How to become a PM in 90 days!</li>
                <li>How to become a PM in 90 days!</li>
                <li>How to become a PM in 90 days!</li>
                <li>How to become a PM in 90 days!</li>
            </ul>
        </div>
    </div>
  )
}
