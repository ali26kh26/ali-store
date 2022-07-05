import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import FilterBar from "../../components/filterBar/FilterBar";
import styles from "./homePage.module.scss";
import Footer from "../../components/footer/Footer";
import NotMatch from "../../components/notMatch/NotMatch";
import FilterTags from "../../components/filterTags/FilterTags";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncproducts } from "../../features/products/productSlice";
import { ADD_TO_CART } from "../../features/cart/cartSlice";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/error/Error";
import { BsCartCheck } from "react-icons/bs";
const HomePage = () => {
  const filteredProduct = useSelector((state) => state.filteredProducts);
  const { cart } = useSelector((state) => state.cart);
  const { products, loading, error } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const addProductHanler = (product) => {
    dispatch(ADD_TO_CART({ product }));
    toast.success(`${product.name} Added to cart`);
  };
  useEffect(() => {
    if (!products.length) {
      dispatch(getAsyncproducts());
    } else return;
  }, []);
  const renderOption = () => {
    if (filteredProduct) return filteredProduct;
    else return products;
  };

  return (
    <main className={styles.totalContainer}>
      <nav>
        <FilterTags />
      </nav>
      <div>
        <section className={styles.productListContainer}>
          {loading && <Loading />}
          {error && <Error error={error} />}
          {filteredProduct && filteredProduct.length === 0 && <NotMatch />}
          {renderOption().map((p) => (
            <article key={p._id} className={styles.poductContainer}>
              <div>
                <img
                  className={styles.productImg}
                  src={p.image}
                  alt={p.description}
                />
              </div>
              <div className={styles.productDescribtion}>
                <p>{p.name}</p>
                <p>$ {p.price}</p>
              </div>

              {cart.findIndex((c) => c._id === p._id) >= 0 ? (
                <button className={styles.btn}>
                  <NavLink to="/cart" className={styles.linkToCart}>
                    <BsCartCheck />
                  </NavLink>
                </button>
              ) : (
                <button
                  onClick={() => addProductHanler(p)}
                  className={styles.btn}
                >
                  Add to cart
                </button>
              )}
            </article>
          ))}
        </section>
        <section className={styles.filterBar}>
          <FilterBar />
        </section>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default HomePage;
