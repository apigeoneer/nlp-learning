import SidebarList from "../sidebarList/SidebarList"
import SidebarTile from "../sidebarTile/SidebarTile"
import "./rightSBHome.css"

export default function RightSBHome() {
  return (
    <div className="rightsbhome">
      <SidebarTile/>
      <SidebarList/>
    </div>
  )
}