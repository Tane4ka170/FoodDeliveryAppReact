import React from "react";
import s from "./Navigation.module.css";

const Navigation: React.FC<{ isLoggedIn: boolean }> = (props) => {
  return (
    <React.Fragment>
      {props.isLoggedIn && props.user === "Custom" ? (
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
    </React.Fragment>
  );
};

export default Navigation;
