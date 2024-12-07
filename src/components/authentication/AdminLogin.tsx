import React from "react";
import s from "./Authentication.module.css";

const AdminLogin: React.FC<any> = (props) => {
  return (
    <React.Fragment>
      <div className={s.adminLoginCart}>
        <div className={s.input}>
          <input type="text" />
        </div>
        <div className={s.input}>
          <input type="password" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminLogin;
