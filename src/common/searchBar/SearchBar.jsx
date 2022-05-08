import { useState } from "react";
import { useProductsActions } from "../../Providers/productsProvider/ProductProvider";
import { getProducts } from "../../services/getProducts";
import styles from "./searchBar.module.scss";

const SearchBar = () => {
  const dispatch = useProductsActions();
  const [searchValue, setSearchValue] = useState("");
  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    getProducts()
      .then(({ data }) => {
        dispatch({
          type: "SEARCH",
          payload: { value: e.target.value, data: data },
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <input
      className={styles.container}
      type="text"
      placeholder="Search ... "
      value={searchValue}
      onChange={(e) => changeHandler(e)}
    />
  );
};

export default SearchBar;
