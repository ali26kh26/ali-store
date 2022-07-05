import { useDispatch, useSelector } from "react-redux";
import {
  price,
  search,
  sort,
} from "../../features/filteredProducts/filteredProductsSlice";
import { setSearch } from "../../features/filterValues/filterValuesSlice";
import styles from "./searchBar.module.scss";

const SearchBar = () => {
  const { products } = useSelector((state) => state.products);
  const priceValue = useSelector((state) => state.filterValues.priceValue);
  const SearchValue = useSelector((state) => state.filterValues.searchValue);
  const sortValue = useSelector((state) => state.filterValues.sortValue);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    dispatch(setSearch(e.target.value));
    dispatch(price({ value: priceValue, data: products, isWith: true }));
    dispatch(search({ value: e.target.value, data: products }));
    dispatch(sort({ value: sortValue, data: products }));
  };
  return (
    <input
      autoFocus
      className={styles.container}
      type="text"
      placeholder="Search ... "
      value={SearchValue}
      onChange={(e) => changeHandler(e)}
    />
  );
};

export default SearchBar;
