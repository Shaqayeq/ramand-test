import { FC, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./private-route";
import LoginPage from "../pages/login";
import MainPage from "../pages/main";

const AppRoutes: FC = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/list" element={<MainPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default AppRoutes;