import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Role, DecisionType } from "./types";
import { routes } from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import IFormRegister from "./Modal";
import Login from "./Container/auth/Login";

const withAccessControl =
  (Component: React.ComponentType, acl: any) => (currentUserRole: Role) => {
    const decision = acl[currentUserRole];
    if (!decision || decision.type === DecisionType.ALLOW) {
      return <Component />;
    } else if (decision.type === DecisionType.REDIRECT) {
      return <Navigate to={decision.meta || "/"} />;
    }
    return null;
  };

function App() {
  const userAdmin: any = useSelector((state: RootState) => state.auth.user);
  let session = localStorage.getItem("token");
  const currentUserRole = userAdmin?.role ? userAdmin?.role : Role.ADMIN; // replace this with the current user's role
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component, exact, acl }) => (
          <Route
            key={path}
            path={path}
            element={
              session ? (
                withAccessControl(component, acl)(currentUserRole)
              ) : (
                <Login />
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
