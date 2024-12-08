import { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Authenticate from "./components/authentication/Authenticate";
import Dashboard from "./components/dashboard/Dashboard";
import Admin from "./components/admin/Admin";

const App: FC<any> = () => {
  const isLoggedIn = false;
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Authenticate />} />
          <Route path="/" element={<Dashboard isLoggedIn={isLoggedIn} />} />
          <Route path="/admin" element={<Admin isLoggedIn={isLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
