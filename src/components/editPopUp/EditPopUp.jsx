import { useState } from "react";
import { useAuth } from "../../Providers/AuthProvider/AuthProvider";
import { editUser } from "../../services/editUser";
import styles from "./EditPopUp.module.scss";

const EditPopUp = ({ data, closeHandler }) => {
  const [newData, setNewData] = useState("");
  const userData = useAuth();
  console.log(data);
  console.log(userData[data]);
  const changeHandler = (e) => {
    setNewData(e.target.value);
  };
  const submitHandler = (e) => {
    editUser(userData)
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <p onClick={() => closeHandler()}>X</p>
        <label htmlFor="">New {data}</label>
        <input
          type="text"
          placeholder={userData[data]}
          onChange={changeHandler}
        />
        <input type="submit" onClick={submitHandler} />
      </div>
    </div>
  );
};

export default EditPopUp;
