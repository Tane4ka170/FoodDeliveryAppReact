import { FC, Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Authenticate from "./components/authentication/Authenticate";
import Dashboard from "./components/dashboard/Dashboard";
import Admin from "./components/admin/Admin";

const App: FC<any> = () => {
  const isLoggedIn = false;
  const [foodItems, setFoodItems] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8259/food-items").then((items: any) => {
      setFoodItems(items);
    });
  }, [foodItems, setFoodItems]);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Authenticate />} />
          <Route
            path="/"
            element={
              <Dashboard isLoggedIn={isLoggedIn} foodItems={foodItems} />
            }
          />
          <Route path="/admin" element={<Admin isLoggedIn={isLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
