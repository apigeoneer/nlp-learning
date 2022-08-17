import "./home.css"
import FeedHome from "../../components/feedhome/FeedHome"
import RightSBHome from "../../components/rightsbhome/RightSBHome"

export default function Home() {
  return (
    <div className="home">
        <FeedHome/>
        <RightSBHome/>
    </div>
  )
}
