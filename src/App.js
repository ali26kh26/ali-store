import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Layout>
            <ToastContainer />
            <Switch>
              <Route path="/profile" component={ProfilePage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/checkout" component={CheckOut} />
              <Route path="/cart" component={CartPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </Layout>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
