import { useDispatch, useSelector } from "react-redux";
import {
  price,
  search,
  sort,
} from "../../features/filteredProducts/filteredProductsSlice";
import {
  setPrice,
  setSearch,
  setSort,
} from "../../features/filterValues/filterValuesSlice";
import styles from "./filterTags.module.scss";

const FilterTags = () => {
  const { products } = useSelector((state) => state.products);
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const searchValue = useSelector((state) => state.filterValues.searchValue);
  const pricevalue = useSelector((state) => state.filterValues.priceValue);
  const sortValue = useSelector((state) => state.filterValues.sortValue);
  const dispatch = useDispatch();

  const closeHandler = (e) => {
    if (e === "search") {
      dispatch(setSearch(""));
      dispatch(price({ value: pricevalue, data: products, isWith: true }));
      dispatch(search({ value: "", data: products }));
      dispatch(sort({ value: sortValue, data: products }));
    } else {
      dispatch(setPrice([99, 260]));
      dispatch(search({ value: searchValue, data: products, isWith: true }));
      dispatch(price({ value: [99, 260], data: products }));
      dispatch(sort({ value: sortValue, data: products }));
    }
  };
  const shouldRender = () => {
    if (pricevalue[0] === 99 && pricevalue[1] === 260) return false;
    else return true;
  };
  const sortHandler = (e) => {
    dispatch(setSort(e.target.value));
    dispatch(sort({ value: e.target.value, data: products }));
  };
  return (
    <main className={styles.container}>
      <section>
        <article>
          <select name="" id="" onChange={sortHandler}>
            <option value="">Sort By</option>
            <option value="HTL">Hig-to-low</option>
            <option value="LTH">Low-to-high</option>
            <option value="AZ">A-Z</option>
            <option value="ZA">Z-A</option>
          </select>
        </article>
        {filteredProducts && (
          <article>{filteredProducts.length} result(s) found</article>
        )}
      </section>
      <section>
        {searchValue !== "" && (
          <article>
            <span>"{searchValue}"</span>{" "}
            <span onClick={() => closeHandler("search")}>X</span>
          </article>
        )}
        {shouldRender() && (
          <article>
            <span>
              <p>
                {pricevalue[0]}$ - {pricevalue[1]}$
              </p>
            </span>
            <span onClick={() => closeHandler("price")}>X</span>
          </article>
        )}
      </section>
    </main>
  );
};

export default FilterTags;
