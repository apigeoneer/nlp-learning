import "./home.css"
import FeedHome from "../../components/feedhome/FeedHome"
import RightSBHome from "../../components/rightsbhome/RightSBHome"
import HomeTile from "../../components/homeTile/HomeTile"

export default function Home() {
  return (
    <div className="home">
      <div className="tiles">
      </div>
      <div className="feed">
        <FeedHome/>
        <RightSBHome/>
       </div>
    </div>
  )
}
