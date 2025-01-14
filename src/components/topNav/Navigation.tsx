import React from "react";
import s from "./Navigation.module.css";
import { useNavigate } from "react-router";

type USER = "Customer" | "Admin";

const Navigation: React.FC<{ isLoggedIn: boolean; user: USER }> = (props) => {
  const router: any = useNavigate();

  function displayNavBar(user: USER) {
    if (user === "Customer") {
      return (
        <div className={s.navBarBg}>
          <ul className={s.navigationBar}>
            <li>Food Delivery</li>
            {props.isLoggedIn ? (
              <>
                <li>Manage orders</li>
                <li>Logout</li>
              </>
            ) : (
              <li onClick={() => router("/login")} className={s.loginButton}>
                Login
              </li>
            )}
          </ul>
        </div>
      );
    } else if (user === "Admin") {
      return (
        <div className={s.navBarBg}>
          <ul className={s.navigationBar}>
            <li>Food Delivery</li>
            {props.isLoggedIn ? (
              <>
                <li>Manage dishes</li>
                <li>Manage customers</li>
                <li>Logout</li>
              </>
            ) : (
              <li>Admin panel</li>
            )}
          </ul>
        </div>
      );
    }
  }

  return <React.Fragment>{displayNavBar(props.user)}</React.Fragment>;
};

export default Navigation;
