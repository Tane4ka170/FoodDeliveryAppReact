import React from "react";
import s from "./FoodItem.module.css";

interface Dish {
  id: number;
  name: string;
  price: number;
  status: string;
}

const FoodItem: React.FC<{ item: Dish }> = (props) => {
  const isAvailable = props.item.status === "in-stock";

  return (
    <React.Fragment>
      <div className={s.itemContainer}>
        <div className={s.itemTitle}>{props.item.name}</div>
        <div className={s.itemPrice}>{props.item.price}</div>
        <div className={isAvailable ? s.itemAvailable : s.itemSold}>
          {isAvailable ? "Available" : "Stock out"}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FoodItem;
