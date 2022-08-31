import Topbar from "./components/topbar/Topbar";
import WritePost from "./pages/writePost/WritePost";
import Home from "./pages/home/Home";
import JoinUs from "./pages/joinUs/JoinUs";
import SinglePost from "./pages/singlePost/SinglePost";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Cover from "./pages/cover/Cover";
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";

function App() {
  const user = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Cover/> }></Route>
        <Route path="/explore" element={ <Home/> }></Route>
        <Route path="/write" element={ <WritePost/> }></Route>
        <Route path="/joinus" element={ <JoinUs/> }></Route>
        <Route path="/profile" element={ <Profile/> }></Route>
        <Route
          path="/post/:id"
          element={ user ? <SinglePost/> : <Navigate to="/login"/> }>
        </Route>
        <Route
          path="/login"
          element={ user ? <Navigate to="/" /> : <SignIn/> }>
        </Route>
        <Route path="/signup" element={ <SignUp/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
