import React from "react";
import FoodItem from "../foodItem/FoodItem";
import Navigation from "../topNav/Navigation";
import styles from "./Dashboard.module.css";

interface Dish {
  id: number;
  name: string;
  price: number;
  status: string;
}

const Dashboard: React.FC<any> = (props) => {
  return (
    <React.Fragment>
      <Navigation isLoggedIn={props.isLoggedIn} user="Customer" />
      <div className={styles.dashboardContainer}>
        <h1 className={styles.menuTitle}>Menu Items</h1>
        <div className={styles.foodItemsGrid}>
          {(props.foodItems as Dish[]).map((item: Dish) => {
            return <FoodItem item={item} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
