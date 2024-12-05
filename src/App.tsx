import React, { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Authenticate from "./components/authentication/Authenticate";

const App: FC<any> = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authenticate />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
