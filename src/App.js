import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartContextProvider } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./componentes/NavBar/NavBar";

import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./componentes/CartContainer/CartContainer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer />}
          ></Route>
          <Route path="/item/:mangaId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
