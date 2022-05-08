import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useAuth,
  useAuthActions,
} from "../../Providers/AuthProvider/AuthProvider";
import styles from "./profileNav.module.scss";

const ProfileNav = () => {
  const [isShow, setIsShow] = useState(false);
  const Auth = useAuth();
  const clickHandler = () => {
    setIsShow(!isShow);
  };
  return (
    <div className={styles.container}>
      <p onClick={clickHandler}>{Auth.name}</p>
      {isShow && <NavBar />}
    </div>
  );
};

export default ProfileNav;

const NavBar = () => {
  const navigate = useNavigate();
  const setAuth = useAuthActions();
  const logOutHandler = () => {
    localStorage.clear();
    setAuth(null);
    navigate("/");
  };
  return (
    <ul className={styles.navContainer}>
      <li>
        <NavLink to="/profile">Edit profile</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>
      <li onClick={logOutHandler}>Log out</li>
    </ul>
  );
};
