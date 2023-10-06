import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./CartList.css";
const CartList = ({ manga }) => {
  const { deleteSelected } = useCartContext();
  return (
    <>
      <tr key={manga.id} className="custom-list">
        <td>
          <img src={manga.imagen} alt="imagen" className="cart-img" />{" "}
        </td>
        <td>{manga.titulo} </td>
        <td>${manga.precio}</td>
        <td>{manga.quantity}</td>
        <td>
          <button onClick={() => deleteSelected(manga.id)}>❌</button>
        </td>
      </tr>
    </>
  );
};

export default CartList;
