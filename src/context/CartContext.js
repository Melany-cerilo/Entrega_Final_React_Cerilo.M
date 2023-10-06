import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [listaCarrito, setListaCarrito] = useState([]);

  const agregarManga = (nuevoManga, stock) => {
    const mangaIndex = listaCarrito.findIndex(
      (manga) => manga.id === nuevoManga.id
    );

    if (mangaIndex !== -1) {
      let totalQuantity =
        listaCarrito[mangaIndex].quantity + nuevoManga.quantity;
      if (totalQuantity > stock) {
        return false;
      } else {
        listaCarrito[mangaIndex].quantity = totalQuantity;
        setListaCarrito([...listaCarrito]);
        return true;
      }
    } else {
      setListaCarrito([...listaCarrito, nuevoManga]);
      return true;
    }
  };

  const precioTotal = () =>
    listaCarrito.reduce(
      (acc, totalMangas) => (acc += totalMangas.quantity * totalMangas.precio),
      0
    );

  const cantidadTotal = () =>
    listaCarrito.reduce((acc, totalMangas) => (acc += totalMangas.quantity), 0);

  const vaciarCarrito = () => {
    setListaCarrito([]);
  };

  const eliminarSeleccionado = (id) =>
    setListaCarrito(listaCarrito.filter((mangas) => mangas.id !== id));

  return (
    <CartContext.Provider
      value={{
        listaCarrito,
        agregarManga,
        vaciarCarrito,
        cantidadTotal,
        precioTotal,
        eliminarSeleccionado,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
