import { Route, Role, DecisionType } from "./types";

import Admin from "./Container/admin";
import Login from "./Container/auth/Login";
import SignUp from "./Container/auth/SignUp";

export const routes: Route[] = [
  {
    path: "/admin/*",
    component: Admin,
    title: "Admin",
    exact: true,
    acl: {
      [Role.GUEST]: {
        type: DecisionType.REDIRECT,
        meta: "/login",
      },
      [Role.USER]: {
        type: DecisionType.REDIRECT,
        meta: "/login",
      },
      [Role.ADMIN]: {
        type: DecisionType.ALLOW,
      },
    },
  },
  {
    path: "/login",
    component: Login,
    title: "Login",
    exact: true,
    acl: {
      [Role.GUEST]: {
        type: DecisionType.ALLOW,
      },
      [Role.USER]: {
        type: DecisionType.ALLOW,
      },
      [Role.ADMIN]: {
        type: DecisionType.ALLOW,
      },
    },
  },
  {
    path: "/signup",
    component: SignUp,
    title: "Signup",
    exact: true,
    acl: {
      [Role.GUEST]: {
        type: DecisionType.ALLOW,
      },
      [Role.USER]: {
        type: DecisionType.ALLOW,
      },
      [Role.ADMIN]: {
        type: DecisionType.ALLOW,
      },
    },
  },
];
