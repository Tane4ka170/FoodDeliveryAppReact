import React from "react";
import s from "./Authentication.module.css";
import Button from "../UI/button";

const AdminLogin: React.FC<any> = (props) => {
  return (
    <React.Fragment>
      <div className={s.centeredContainer}>
        <div className={s.adminLoginCart}>
          <h3 className={s.adminLoginTitle}>Admin Sign In</h3>
          <input type="text" className={s.input} placeholder="Enter username" />

          <input
            type="password"
            className={s.input}
            placeholder="Enter password"
          />
          <Button
            color="white"
            bgColor="transparent"
            label={"Verify and Login"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminLogin;
