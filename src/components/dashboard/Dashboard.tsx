import React from "react";
import FoodItem from "../foodItem/FoodItem";
import Navigation from "../topNav/Navigation";

interface Dish {
  id: number;
  name: string;
  price: number;
  status: string;
}

const foodItems: Dish[] = [
  {
    id: 1,
    name: "Pizza Margherita",
    price: 13,
    status: "in-stock",
  },
  {
    id: 2,
    name: "Cheeseburger",
    price: 9,
    status: "in-stock",
  },
  {
    id: 3,
    name: "Caesar Salad",
    price: 10,
    status: "out-of-stock",
  },
  {
    id: 4,
    name: "Spaghetti Carbonara",
    price: 15,
    status: "in-stock",
  },
  {
    id: 5,
    name: "Sushi Platter",
    price: 20,
    status: "in-stock",
  },
  {
    id: 6,
    name: "Tiramisu",
    price: 7,
    status: "out-of-stock",
  },
];

const Dashboard: React.FC<any> = (props) => {
  const isLoggedIn = false;
  return (
    <React.Fragment>
      <Navigation isLoggedIn={isLoggedIn} user="Customer" />
      <h1
        style={{
          fontFamily: "Alegreya Sans SC",
          fontSize: 32,
          textAlign: "center",
          marginTop: "120px",
        }}
      >
        Menu Items
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {foodItems.map((item: Dish) => {
          return <FoodItem item={item} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
