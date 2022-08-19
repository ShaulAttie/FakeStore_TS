import "./App.css";
import { useEffect, useReducer } from "react";
import { reducerFn, initialState } from "./reducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ctx } from "./context";
import Layout from "./Layout";
import { ProductDetail } from "./pages/ProductDetail";
import { Categories } from "./pages/Categories";
import { Cart } from "./pages/Cart";
import { WrongPage } from "./pages/WrongPage";
import { Header } from "./containers/Header";
import { Signin } from "./containers/Signin";
import { Login } from "./containers/Login";
import { ProdByCategory } from "./pages/ProdByCategory";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
// import Drawer from "./containers/Drawer";
// import DrawerCard from "./components/DrawerCard";
import Wellcome from "./pages/Wellcome";
import About from "./pages/About";
import Annoucement from "./containers/Annoucement";

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  // const [isOpen, setIsOpen] = useState(false)


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "ADD_PRODUCTS", payload: data }));
  }, []);

  return (
    <ShoppingCartProvider>
      <ctx.Provider value={state}>
        <BrowserRouter>
        <Annoucement/>
          <Header />
          <div className="Wrap_App">
            <div className="App">
              <Layout>
                <Routes>
                  <Route path="/" element={<Wellcome />} />
                  <Route path="/categories" element={<Categories />} />

                  <Route path="/about" element={<About />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/cart" element={<Cart />} />

                  <Route path="/categories/:category" element={<ProdByCategory />} />
                  <Route
                    path="/categories/:category/:title"
                    element={<ProductDetail dispatch={dispatch} />}
                  />
                  <Route path="*" element={<WrongPage />} />
                </Routes>
              </Layout>
              {/* <Drawer isOpen={isOpen} /> */}
              {/* <DrawerCard id={0} quantity={0} /> */}
            </div>
          </div>
        </BrowserRouter>
      </ctx.Provider>
    </ShoppingCartProvider>
  );
}

export default App;
