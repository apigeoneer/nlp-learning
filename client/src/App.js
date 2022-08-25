import Topbar from "./components/topbar/Topbar";
import WritePost from "./pages/writePost/WritePost";
import Home from "./pages/home/Home";
import JoinUs from "./pages/joinUs/JoinUs";
import SinglePost from "./pages/singlePost/SinglePost";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/explore" element={ <Home/> }></Route>
        <Route path="/write" element={ <WritePost/> }></Route>
        <Route path="/joinus" element={ <JoinUs/> }></Route>
        <Route path="/:id" element={ <SinglePost/> }></Route>
        <Route path="/profile" element={ <Profile/> }></Route>
        <Route path="/signin" element={ <SignIn/> }></Route>
        <Route path="/signup" element={ <SignUp/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
