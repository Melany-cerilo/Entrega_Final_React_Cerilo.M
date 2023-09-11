import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./componentes/CartContainer/CartContainer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route
          path="/categoria/:categoriaId"
          element={<ItemListContainer />}
        ></Route>
        <Route path="/detalle/:mangaId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
