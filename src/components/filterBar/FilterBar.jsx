import { useState } from "react";
import RangeSlider from "../rangeSlider/RangeSlider";
import styles from "./filterBar.module.scss";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import SearchBar from "../../common/searchBar/SearchBar";
const FilterBar = () => {
  const [priceShow, setPriceShow] = useState(false);
  const [nameShow, setNameShow] = useState(false);

  const priceHandler = () => {
    setPriceShow(!priceShow);
  };
  const nameHandler = () => {
    setNameShow(!nameShow);
  };

  return (
    <div className={styles.container}>
      <div className={styles.PriceFliter}>
        <div onClick={priceHandler}>
          <p>Filter by price</p>
          <p>{priceShow ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
        </div>
        <div>{priceShow && <RangeSlider />}</div>
      </div>
      <div className={styles.nameFliter}>
        <div onClick={nameHandler}>
          <p>Filter by name</p>
          <p>{nameShow ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
        </div>
        <div>{nameShow && <SearchBar />}</div>
      </div>
    </div>
  );
};

export default FilterBar;
