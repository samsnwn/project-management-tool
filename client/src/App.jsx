import { Routes, Route } from "react-router-dom";
import Comments from "./components/Comments";
import Login from "./components/Login";
import Task from "./components/Task";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/task" element={<Task />} />
        <Route path="/comments/:category/:id" element={<Comments />} />
      </Routes>
    </>
  );
}

export default App;
