import { useCart, useCartActions } from "../../Providers/CartProvider";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/getProducts";
const HomePage = () => {
  const [products, setProducts] = useState(null);
  const { cart } = useCart();
  const dispatch = useCartActions();
  const addProductHanler = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    toast.success(`${product.name} Added to cart`);
  };
  useEffect(() => {
    getProducts()
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  if (!products) return <p>loading</p>;
  return (
    <main className="productListContainer">
      {products.map((p) => (
        <section key={p._id} className="poductContainer">
          <div>
            <img className="productImg" src={p.image} alt={p.description} />
          </div>
          <div className="productDescribtion">
            <p>{p.name}</p>
            <p>$ {p.price}</p>
          </div>

          {cart.findIndex((c) => c._id === p._id) >= 0 ? (
            <button className="btn">
              <NavLink to="/cart" className="linkToCart">
                go to cart
              </NavLink>
            </button>
          ) : (
            <button onClick={() => addProductHanler(p)} className="btn">
              Add to cart
            </button>
          )}
        </section>
      ))}
    </main>
  );
};

export default HomePage;
