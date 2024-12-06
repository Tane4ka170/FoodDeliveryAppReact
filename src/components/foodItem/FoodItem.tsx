import React from "react";
import s from "./FoodItem.module.css";

interface Dish {
  id: number;
  name: string;
  price: number;
  status: string;
}

const FoodItem: React.FC<{ item: Dish }> = (props) => {
  return (
    <React.Fragment>
      <div className={s.itemContainer}>{props.item.name}</div>
    </React.Fragment>
  );
};

export default FoodItem;
