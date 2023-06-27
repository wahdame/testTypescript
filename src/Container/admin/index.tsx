import Layaout from "../../Layaout";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

export default function Admin() {
  return (
    <Layaout>
      <Routes>
        <Route index path={`/default`} element={<Dashboard />} />
        <Route path={`/projects`} element={<Projects />} />
        <Route path={`/tasks`} element={<Tasks />} />
        <Route path={`/settings`} element={<Settings />} />
        <Route path="/default" element={<Navigate to="/default" replace />} />
      </Routes>
    </Layaout>
  );
}
