import { FC, Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";
import Admin from "./components/admin/Admin";
import CustomerLogin from "./components/customerLogin/CustomerLogin";
import DescribeItem from "./components/describeItem/DescribeItem";

const App: FC<any> = () => {
  const isLoggedIn = false;
  const [foodItems, setFoodItems] = useState<
    Array<{ id: number; name: string; price: number; status: string }>
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8259/food-items");
      const data = await response.json();
      setFoodItems(data);
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<CustomerLogin />} />
          <Route
            path="/"
            element={
              <Dashboard
                isLoggedIn={isLoggedIn}
                foodItems={
                  foodItems.length > 0
                    ? foodItems
                    : [{ id: 0, name: "N/A", price: 0, status: "out-of-stock" }]
                }
              />
            }
          />
          <Route path="/admin" element={<Admin isLoggedIn={isLoggedIn} />} />
          <Route path="/view-dish/:id" element={<DescribeItem />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
