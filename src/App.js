import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./componentes/NavBar/NavBar";

import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Hola, bienvenido a MangaManía"} />
    </div>
  );
}

export default App;
