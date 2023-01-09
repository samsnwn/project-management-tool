import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Board from "./pages/Board";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import AppLayout from "./components/layout/AppLayout";
import AuthLayout from "./components/layout/AuthLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/boards" element={<Home />} />
          <Route path="/boards/:boardsId" element={<Board />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
