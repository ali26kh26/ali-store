import Slider from "@material-ui/core/Slider";
import styles from "./rangeSlider.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  price,
  search,
  sort,
} from "../../features/filteredProducts/filteredProductsSlice";
import { setPrice } from "../../features/filterValues/filterValuesSlice";

const RangeSlider = () => {
  const { products } = useSelector((state) => state.products);
  const priceValue = useSelector((state) => state.filterValues.priceValue);
  const searchValue = useSelector((state) => state.filterValues.searchValue);
  const sortValue = useSelector((state) => state.filterValues.sortValue);
  const dispatch = useDispatch();

  const rangeSelector = (event, newValue) => {
    dispatch(setPrice(newValue));
    dispatch(search({ value: searchValue, data: products, isWith: true }));
    dispatch(price({ value: priceValue, data: products }));
    dispatch(sort({ value: sortValue, data: products }));
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
