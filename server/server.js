const express = require("express");
const cors = require("cors");
const http = require("http");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.set("PORT", 8259 || PORT);

app.use("/food-items", (req, res, next) => {
  const items = [
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
    {
      id: 7,
      name: "Grilled Chicken",
      price: 12,
      status: "in-stock",
    },
    {
      id: 8,
      name: "French Fries",
      price: 5,
      status: "in-stock",
    },
    {
      id: 9,
      name: "Vegetable Soup",
      price: 8,
      status: "out-of-stock",
    },
    {
      id: 10,
      name: "Lobster Bisque",
      price: 25,
      status: "in-stock",
    },
    {
      id: 11,
      name: "Steak",
      price: 30,
      status: "in-stock",
    },
    {
      id: 12,
      name: "Panna Cotta",
      price: 8,
      status: "in-stock",
    },
    {
      id: 13,
      name: "Apple Pie",
      price: 6,
      status: "in-stock",
    },
    {
      id: 14,
      name: "Fish Tacos",
      price: 11,
      status: "in-stock",
    },
    {
      id: 15,
      name: "Chocolate Lava Cake",
      price: 9,
      status: "out-of-stock",
    },
  ];
  res.send(items);
});

http.createServer(app).listen(app.get("PORT"), "127.0.0.1");
