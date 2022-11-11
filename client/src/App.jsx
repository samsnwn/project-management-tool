import { Routes, Route } from "react-router-dom";
import Comments from "./components/pages/Comments";
import Login from "./components/authentication/Login";
import Task from "./components/pages/Task";
import Register from "./components/authentication/Register";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/task" element={<Task />} />
        <Route path="/comments/:category/:id" element={<Comments />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
