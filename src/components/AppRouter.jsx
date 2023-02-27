import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AUTH_Context } from "../context";

import { privateRoutes, publicRoutes } from "./../router/routs.js";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AUTH_Context);

  if (isLoading) {
    return <Loader />;
  }

  const routes = isAuth ? privateRoutes : publicRoutes;
  const defaultRoute = isAuth ? "/posts" : "/login";
  const errorPage = isAuth ? "/error" : "/login";

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="/login" element={<Navigate to={defaultRoute} replace />} />
      <Route path="*" element={<Navigate to={errorPage} replace />} />
    </Routes>
  );
};

export default AppRouter;
