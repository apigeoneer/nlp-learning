import Topbar from "./components/topbar/Topbar";
import Post from "./pages/post/Post";
import Home from "./pages/home/Home";
import JoinUs from "./pages/joinUs/JoinUs";
import SinglePost from "./pages/singlePost/SinglePost";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <SinglePost/>
    </div>
  );
}

export default App;
