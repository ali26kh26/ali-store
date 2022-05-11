import { useState } from "react";
import { usePriceFilter } from "../../Providers/priceFilterProvider/PriceFilterProvider";
import { useProductsActions } from "../../Providers/productsProvider/ProductProvider";
import {
  useSearchFilter,
  useSearchFilterActions,
} from "../../Providers/searchFilterProvider/SearchFilterProvider";
import { useSort } from "../../Providers/sortProvider/sortProvider";
import { getProducts } from "../../services/getProducts";
import styles from "./searchBar.module.scss";

const SearchBar = () => {
  const dispatch = useProductsActions();
  const priceFilterValue = usePriceFilter();
  const setSearchValue = useSearchFilterActions();
  const SearchValue = useSearchFilter();
  const sortVslue = useSort();
  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    getProducts()
      .then(({ data }) => {
        dispatch({
          type: "PRICE",
          payload: { value: priceFilterValue, data: data, isWith: true },
        });
        dispatch({
          type: "SEARCH",
          payload: { value: e.target.value, data: data },
        });
        dispatch({
          type: "SORT",
          payload: { value: sortVslue, data: data },
        });
      })
      .catch((err) => console.log(err));
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
