import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CartProvider from "./Providers/CartProvider";
import CartPage from "./pages/CartPage/Cartpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout";
import CheckOut from "./pages/Checkout/CheckOut";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AuthProvider from "./Providers/AuthProvider/AuthProvider";
import ProfilePage from "./pages/profilePage/ProflePage";
import ProductProvider from "./Providers/productsProvider/ProductProvider";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import PriceFilterProvider from "./Providers/priceFilterProvider/PriceFilterProvider";
import SearchFilterProvider from "./Providers/searchFilterProvider/SearchFilterProvider";
import SortProvider from "./Providers/sortProvider/sortProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <PriceFilterProvider>
              <SearchFilterProvider>
                <SortProvider>
                  <Layout>
                    <ScrollToTop />
                    <ToastContainer />
                    <Routes>
                      <Route path="/profile" element={<ProfilePage />} />
                      <Route path="/signup" element={<SignUpPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/checkout" element={<CheckOut />} />
                      <Route path="/cart" element={<CartPage />} />
                      <Route path="/" element={<HomePage />} />
                    </Routes>
                  </Layout>
                </SortProvider>
              </SearchFilterProvider>
            </PriceFilterProvider>
          </ProductProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
