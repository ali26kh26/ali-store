import { useSelector } from "react-redux";
import {
  usePriceFilter,
  usePriceFilterActions,
} from "../../Providers/priceFilterProvider/PriceFilterProvider";
import {
  useProducts,
  useProductsActions,
} from "../../Providers/productsProvider/ProductProvider";
import {
  useSearchFilter,
  useSearchFilterActions,
} from "../../Providers/searchFilterProvider/SearchFilterProvider";
import {
  useSort,
  useSortActions,
} from "../../Providers/sortProvider/sortProvider";
import { getProducts } from "../../services/getProducts";
import styles from "./filterTags.module.scss";

const FilterTags = () => {
  const { products } = useSelector((state) => state.products);
  const pricevalue = usePriceFilter();
  const searchValue = useSearchFilter();
  const dispatch = useProductsActions();
  const setSearchValue = useSearchFilterActions();
  const setPriceValue = usePriceFilterActions();
  const productss = useProducts();
  const setSortValue = useSortActions();
  const sortValue = useSort();
  const closeHandler = (e) => {
    // getProducts()
    //   .then(({ data }) => {
    if (e === "search") {
      setSearchValue("");
      dispatch({
        type: "PRICE",
        payload: { value: pricevalue, data: products, isWith: true },
      });
      dispatch({
        type: "SEARCH",
        payload: { value: "", data: products },
      });
      dispatch({
        type: "SORT",
        payload: { value: sortValue, data: products },
      });
    } else {
      setPriceValue([99, 260]);
      dispatch({
        type: "SEARCH",
        payload: { value: searchValue, data: products, isWith: true },
      });
      dispatch({
        type: "PRICE",
        payload: { value: [99, 260], data: products },
      });
      dispatch({
        type: "SORT",
        payload: { value: sortValue, data: products },
      });
    }
    // })
    // .catch((err) => console.log(err));
  };
  const shouldRender = () => {
    if (pricevalue[0] === 99 && pricevalue[1] === 260) return false;
    else return true;
  };
  const sortHandler = (e) => {
    console.log(e.target.value);
    setSortValue(e.target.value);
    // getProducts()
    //   .then(({ data }) => {
    dispatch({
      type: "SORT",
      payload: { value: e.target.value, data: products },
    });
    // })
    // .catch((err) => console.log(err));
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
        {productss && <article>{productss.length} result(s) found</article>}
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
