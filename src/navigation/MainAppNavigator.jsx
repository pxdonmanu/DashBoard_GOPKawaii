import React from "react";
import IndexPage from "../pages/dates";
import AccountancyDash from "../pages/accountancy";
import FilesDash from "../pages/files";
import BackofficeDash from "../pages/backoffice";
import { Routes, Route } from "react-router-dom";
import ROUTES from "../ROUTES/index";

export const App = (props) => {
  props.id;
  return (
    <Routes>
      <Route index path={ROUTES.Dates} element={<IndexPage />} />
      <Route path={ROUTES.Backoffice} element={<BackofficeDash />} />
      <Route path={ROUTES.Files} element={<FilesDash />} />
      <Route path={ROUTES.Accountancy} element={<AccountancyDash />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};
