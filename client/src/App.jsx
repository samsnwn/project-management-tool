import { Routes, Route } from "react-router-dom";
import Comments from "./components/pages/Comments";
import Login from "./components/authentication/Login";
import Task from "./components/pages/Task";
import Register from "./components/authentication/Register";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/task" element={<Task />} />
        <Route path="/comments/:category/:id" element={<Comments />} />
      </Routes>
    </>
  );
}

export default App;
