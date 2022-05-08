import { useNavigate } from "react-router-dom";
import {
  useAuth,
  useAuthActions,
} from "../../Providers/AuthProvider/AuthProvider";
import styles from "./profilePage.module.scss";
import { FaPhoneAlt, FaEnvelope, FaRegIdCard } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import EditPopUp from "../../components/editPopUp/EditPopUp";
const ProfilePage = () => {
  const [changedData, setChangedData] = useState({
    isShow: false,
    value: "",
  });
  const navigate = useNavigate();
  const userData = useAuth();
  const setAuth = useAuthActions();
  const logOutHandler = () => {
    localStorage.clear();
    setAuth(null);
    navigate("/");
  };
  const clickHandler = (e) => {
    setChangedData({ isShow: !changedData.isShow, value: e });
  };
  const closeHandler = () => {
    setChangedData({ ...changedData, isShow: !changedData.isShow });
  };
  return (
    <div className={styles.container}>
      {changedData.isShow && (
        <EditPopUp data={changedData.value} closeHandler={closeHandler} />
      )}
      <ul>
        <li>
          <span>
            <FaRegIdCard />
          </span>
          name
          <p>
            {userData.name}
            <span>
              <AiFillEdit onClick={() => clickHandler("name")} />
            </span>
          </p>
        </li>
        <li>
          <span>
            <FaEnvelope />
          </span>
          email
          <p>
            {userData.email}
            <span>
              <AiFillEdit onClick={() => clickHandler("email")} />
            </span>
          </p>
        </li>
        <li>
          <span>
            <FaPhoneAlt />
          </span>
          phone number
          <p>
            {userData.phoneNumber}
            <span>
              <AiFillEdit onClick={() => clickHandler("phoneNumber")} />
            </span>
          </p>
        </li>
      </ul>
      <button onClick={logOutHandler}>log out</button>
    </div>
  );
};

export default ProfilePage;
