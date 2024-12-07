import React from "react";
import s from "./Navigation.module.css";

type USER = "Customer" | "Admin";

const Navigation: React.FC<{ isLoggedIn: boolean; user: USER }> = (props) => {
  return (
    <React.Fragment>
      {props.isLoggedIn && props.user === "Customer" ? (
        <div className={s.navBarBg}>
          <ul className={s.navigationBar}>
            <li>Food Delivery</li>
            <li>Manage orders</li>
            <li>Logout</li>
          </ul>
        </div>
      ) : (
        <div className={s.navBarBg}>
          <ul className={s.navigationBar}>
            <li>Food Delivery</li>
            <li>Login</li>
          </ul>
        </div>
      )}
      {props.isLoggedIn && props.user === "Admin" ? (
        <div className={s.navBarBg}>
          <ul className={s.navigationBar}>
            <li>Food Delivery</li>
            <li>Manage dishes</li>
            <li>Manage customers</li>
            <li>Logout</li>
          </ul>
        </div>
      ) : (
        <div className={s.navBarBg}>
          <ul className={s.navigationBar}>
            <li>Food Delivery</li>
            <li>Admin panel</li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navigation;
