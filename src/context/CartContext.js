import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  //función para agregar manga al carrito. Al agregar uno que ya está, se suman las cantidades .
  const addManga = (newManga, stock) => {
    const mangaIndex = cartList.findIndex((manga) => manga.id === newManga.id);

    if (mangaIndex !== -1) {
      //sumo cantidad ya existente en el carrito para este nuevo manga para controlar contra el stock del mismo
      let totalQuantity = cartList[mangaIndex].quantity + newManga.quantity;
      if (totalQuantity > stock) {
        return false;
      } else {
        cartList[mangaIndex].quantity = totalQuantity;
        setCartList([...cartList]);
        return true;
      }
    } else {
      setCartList([...cartList, newManga]);
      return true;
    }
  };
  //función para mostrar la suma total a pagar
  const totalPrice = () =>
    cartList.reduce(
      (acc, totalMangas) => (acc += totalMangas.quantity * totalMangas.precio),
      0
    );
  //función para obtener cantidad total de mangas en el carrito
  const getTotalQuantity = () =>
    cartList.reduce((acc, totalMangas) => (acc += totalMangas.quantity), 0);

  //función para vaciar carrito
  const emptyCart = () => {
    setCartList([]);
  };
  //función para eliminar por item del carrito
  const deleteSelected = (id) =>
    setCartList(cartList.filter((mangas) => mangas.id !== id));

  return (
    <CartContext.Provider
      value={{
        cartList,
        addManga,
        emptyCart,
        getTotalQuantity,
        totalPrice,
        deleteSelected,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
