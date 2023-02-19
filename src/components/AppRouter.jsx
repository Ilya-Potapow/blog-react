import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AUTH_Context } from "../context";

import { privatRouts, publickRouts } from "../router/routs";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AUTH_Context);
  console.log(isAuth);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privatRouts.map((r, i) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
      <Route path="/login" element={<Navigate to="/posts" replace />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publickRouts.map((r, i) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
