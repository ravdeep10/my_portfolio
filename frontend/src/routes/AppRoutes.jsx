import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import Login from "../pages/Admin/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
