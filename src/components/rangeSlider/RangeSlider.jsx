import Slider from "@material-ui/core/Slider";
import styles from "./rangeSlider.module.scss";
import { useProductsActions } from "../../Providers/productsProvider/ProductProvider";
import { getProducts } from "../../services/getProducts";
import { useState } from "react";
import {
  usePriceFilter,
  usePriceFilterActions,
} from "../../Providers/priceFilterProvider/PriceFilterProvider";
import { useSearchFilter } from "../../Providers/searchFilterProvider/SearchFilterProvider";
import { useSort } from "../../Providers/sortProvider/sortProvider";
import { useSelector } from "react-redux";

const RangeSlider = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useProductsActions();
  const setPriceValue = usePriceFilterActions();
  const priceValue = usePriceFilter();
  const searchValue = useSearchFilter();
  const sortVslue = useSort();

  const rangeSelector = (event, newValue) => {
    setPriceValue(newValue);
    // getProducts()
    //   .then(({ data }) => {
    dispatch({
      type: "PRICE",
      payload: { value: priceValue, data: products },
    });
    dispatch({
      type: "SEARCH",
      payload: { value: searchValue, data: products, isWith: true },
    });
    dispatch({
      type: "SORT",
      payload: { value: sortVslue, data: products },
    });
    // })
    // .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <section>
        <div>
          <Slider
            value={priceValue}
            min={99}
            max={260}
            onChange={rangeSelector}
            valueLabelDisplay="auto"
            color="secondary"
          />
        </div>
      </section>
      <div>
        <span>{priceValue[0]}$</span> - <span>{priceValue[1]}$ </span>
      </div>
    </div>
  );
};

export default RangeSlider;
