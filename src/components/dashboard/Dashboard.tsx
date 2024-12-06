import React from "react";
import FoodItem from "../foodItem/FoodItem";

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
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h1
          style={{
            fontFamily: "Alegreya Sans SC",
            fontSize: 32,
          }}
        >
          Get Food Delivered
        </h1>
        {foodItems.map((item: Dish) => {
          return <FoodItem item={item} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
