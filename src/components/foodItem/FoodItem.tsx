import React from "react";
import s from "./FoodItem.module.css";
import Button from "../UI/button";
import { useNavigate } from "react-router";

interface Dish {
  id: number;
  name: string;
  price: number;
  status: string;
}

const FoodItem: React.FC<{ item: Dish }> = (props) => {
  const isAvailable = props.item.status === "in-stock";
  const router = useNavigate();
  const viewDishHandler = () => {
    router(`view-dish/${props.item.id}`);
  };

  return (
    <React.Fragment>
      <div className={s.itemContainer} key={props.item.id}>
        <div className={s.itemTitle}>{props.item.name}</div>
        <div className={s.itemPrice}>$ {props.item.price}</div>
        <div className={isAvailable ? s.itemAvailable : s.itemSold}>
          {isAvailable ? "Available" : "Stock out"}
        </div>
        <div className={s.buttonContainer}>
          <Button label="Add Item" color="white" bgColor="#4caf50" />
          <Button
            label="View dish"
            color="#333"
            bgColor="#f0f0f3"
            onClick={() => {
              viewDishHandler();
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FoodItem;
