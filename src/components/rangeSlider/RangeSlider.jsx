import Slider from "@material-ui/core/Slider";
import styles from "./rangeSlider.module.scss";
import { useProductsActions } from "../../Providers/productsProvider/ProductProvider";
import { getProducts } from "../../services/getProducts";
import { useState } from "react";

const RangeSlider = () => {
  const [value, setValue] = useState([99, 260]);
  const dispatch = useProductsActions();

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    getProducts()
      .then(({ data }) => {
        dispatch({
          type: "PRICE",
          payload: { value: value, data: data },
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <p>99$</p>
        </li>
        <li>
          <div>
            <Slider
              value={value}
              min={99}
              max={260}
              onChange={rangeSelector}
              valueLabelDisplay="auto"
              color="secondary"
            />
          </div>
        </li>
        <li>
          <p>260$</p>
        </li>
      </ul>
      <div>
        <span>{value[0]}</span> - <span>{value[1]}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
