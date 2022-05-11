import { BsFillBagXFill } from "react-icons/bs";
import styles from "./notMatch.module.scss";
const NotMatch = () => {
  return (
    <div className={styles.container}>
      <div>
        <BsFillBagXFill />
      </div>
      <p>No items match</p>
    </div>
  );
};

export default NotMatch;
