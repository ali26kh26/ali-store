import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/getProducts";
import FilterBar from "../../components/filterBar/FilterBar";
import { useProducts } from "../../Providers/productsProvider/ProductProvider";
import styles from "./homePage.module.scss";
import Footer from "../../components/footer/Footer";
import NotMatch from "../../components/notMatch/NotMatch";
import FilterTags from "../../components/filterTags/FilterTags";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncproducts } from "../../features/products/productSlice";
import { ADD_TO_CART } from "../../features/cart/cartSlice";
const HomePage = () => {
  const filteredProduct = useProducts();
  // const [products, setProducts] = useState(null);
  const { cart } = useSelector((state) => state.cart);
  const { products, loading, error } = useSelector((state) => state.products);

  const reduxDispatch = useDispatch();
  const addProductHanler = (product) => {
    reduxDispatch(ADD_TO_CART({ product }));
    toast.success(`${product.name} Added to cart`);
  };
  useEffect(() => {
    if (!products.length) {
      reduxDispatch(getAsyncproducts());
    } else return;
    // getProducts()
    //   .then(({ data }) => setProducts(data))
    //   .catch((err) => console.log(err));
  }, []);
  const renderOption = () => {
    if (filteredProduct) return filteredProduct;
    else return products;
  };
  if (loading) return <p>loading</p>;

  return (
    <main className={styles.totalContainer}>
      <nav>
        <FilterTags />
      </nav>
      <body>
        <section className={styles.productListContainer}>
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
                    go to cart
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
      </body>
      {/* <Footer /> */}
    </main>
  );
};

export default HomePage;
