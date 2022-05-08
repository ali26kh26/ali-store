import { useState } from "react";
import { useProductsActions } from "../../Providers/productsProvider/ProductProvider";
import { getProducts } from "../../services/getProducts";
import RangeSlider from "../rangeSlider/RangeSlider";
import styles from "./filterBar.module.scss";
const FilterBar = () => {
  const dispatch = useProductsActions();

  const [sizeValue, setSizeValue] = useState("");

  const changeHandler = (e) => {
    setSizeValue(e.target.value);
    getProducts()
      .then(({ data }) => {
        dispatch({
          type: "SIZE",
          payload: { value: e.target.value, data: data },
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.container}>
      {/* <div>
        <label htmlFor="size">Size :</label>
        <select name="size" id="size" onChange={changeHandler}>
          <option value="">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div> */}
      <RangeSlider />
    </div>
  );
};

export default FilterBar;
