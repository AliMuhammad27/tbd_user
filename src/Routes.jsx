import { useEffect } from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import { Switch, Route, withRouter } from "react-router-dom";
import { useRecoilState } from "recoil";
import { me } from "./Apis";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTop";
import PrivateRoutes from "./PrivateRoutes";
import { userState } from "./Recoil";
import NotFound from "./Screens/404";
import Cart from "./Screens/Cart/Cart";
import Checkout from "./Screens/Checkout/Checkout";
import Contact from "./Screens/Contact/Contact";
import Content from "./Screens/Content/Content";
import FeaturedProducts from "./Screens/FeaturedProducts/FeaturedProducts";
import Gallery from "./Screens/Gallery/Gallery";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Login/Login";
import Recover from "./Screens/Login/Recover";
import NewProducts from "./Screens/NewProducts/NewProducts";
import Notification from "./Screens/Notification/Notification";
import OrderDetails from "./Screens/Order/OrderDetails";
import OrderLog from "./Screens/Order/OrderLog";
import ListProducts from "./Screens/Products/ListProducts";
import ProductDetails from "./Screens/Products/ProductDetails";
import Profile from "./Screens/Profile/Profile";
import Register from "./Screens/Register/Register";
import Store from "./Screens/Store/Store";
import Wishlist from "./Screens/Wishlist/Wishlist";
import FAQ from "./Screens/Faq/FAQ";
import Blog from "./Screens/Blog/Blog";

// COMPONENTS

// SCREENS

function Routes({ history, location }) {
  const [user, setUser] = useRecoilState(userState);
  const [disableFooter, setDisableFooter] = useState(false);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.includes("/login")) setDisableFooter(true);
    else setDisableFooter(false);
  }, [location.pathname]);

  useEffect(() => {
    const Token = localStorage.getItem("TokenUser");
    if (Token) meMutate();
  }, []);

  const { mutate: meMutate } = useMutation(() => me(), {
    retry: false,
    onSuccess: (res) => {
      setUser(res?.data?.user);
    },
    onError: (err) => {
      localStorage.removeItem("TokenUser");
    },
  });

  return (
    <div>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route
          path="/products"
          exact
          render={(props) => <ListProducts {...props} />}
        />
        <Route
          path="/products/:category"
          exact
          render={(props) => <ListProducts {...props} />}
        />
        <Route
          path="/products/:category/:sub_category"
          exact
          render={(props) => <ListProducts {...props} />}
        />
        <Route
          path="/product/:id"
          exact
          render={(props) => <ProductDetails {...props} />}
        />
        <Route path="/login" exact render={(props) => <Login {...props} />} />
        <Route
          path="/register"
          exact
          render={(props) => <Register {...props} />}
        />
        <Route
          path="/contact-us"
          exact
          render={(props) => <Contact {...props} />}
        />
        <Route path="/cart" exact render={(props) => <Cart {...props} />} />
        <Route
          path="/checkout"
          exact
          render={(props) => <Checkout {...props} />}
        />
        <Route
          path="/order/logs"
          exact
          render={(props) => <OrderLog {...props} />}
        />
        <Route
          path="/order/:id"
          exact
          render={(props) => <OrderDetails {...props} />}
        />
        <PrivateRoutes path="/profile" exact component={Profile} />
        <Route
          path="/notification"
          exact
          render={(props) => <Notification {...props} />}
        />
        <Route
          path="/wishlist"
          exact
          render={(props) => <Wishlist {...props} />}
        />
        <Route
          path="/store/:id"
          exact
          render={(props) => <Store {...props} />}
        />
        <Route
          path="/recover"
          exact
          render={(props) => <Recover {...props} />}
        />
        <Route
          path="/gallery"
          exact
          render={(props) => <Gallery {...props} />}
        />

        <Route path="/faqs" exact render={(props) => <FAQ {...props} />} />
        <Route path="/blogs" exact render={(props) => <Blog {...props} />} />

        <Route
          path="/content/:id"
          exact
          render={(props) => <Content {...props} />}
        />
        <Route
          path="/new-arrival"
          exact
          render={(props) => <NewProducts {...props} />}
        />
        <Route
          path="/featured"
          exact
          render={(props) => <FeaturedProducts {...props} />}
        />
        <Route path="/*" exact render={(props) => <NotFound {...props} />} />
      </Switch>
      {!disableFooter && <Footer />}
    </div>
  );
}

export default withRouter(Routes);
