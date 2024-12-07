import React from "react";
import Navigation from "../topNav/Navigation";

interface AdminProps {
  isLoggedIn: boolean;
}

const Admin: React.FC<AdminProps> = (props) => {
  return (
    <React.Fragment>
      <Navigation isLoggedIn={props.isLoggedIn} />
    </React.Fragment>
  );
};

export default Admin;
