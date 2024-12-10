import React from "react";
import s from "./CustomerLogin.module.css";

const CustomerLogin: React.FC<any> = (props) => {
  return (
    <React.Fragment>
      <div className={s.centeredContainer}>
        <div className={s.customerLoginCart}>
          <h3 className={s.customerLoginTitle}>Customer Log In</h3>
          <input
            type="text"
            placeholder="Enter your username here"
            className={s.input}
          />
          <input
            type="password"
            placeholder="Enter your password here"
            className={s.input}
          />
          <button className={s.loginButton}>Log in</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomerLogin;
