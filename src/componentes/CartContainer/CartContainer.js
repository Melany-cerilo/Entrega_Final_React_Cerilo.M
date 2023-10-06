import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import Form from "../form/Form";
import "./CartContainer.css";
const CartContainer = () => {
  const [id, setId] = useState();
  const { cartList, emptyCart, totalPrice } = useCartContext();

  //cuando haya id es porque se acaba de realizar una compra. por lo tanto muestro cartel con ID GENERADO.
  //si carrito no tiene mangas muestro cartel CARRITO VACIO.
  //si carrito esta lleno, se lista la elección del usuario
  return (
    <>
      {id !== undefined && (
        <h3 className="orden-generada">
          Tu orden de compra fue generada el ID es: {id}
        </h3>
      )}

      {cartList.length > 0 ? (
        <div>
          <div className="box-cart">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Manga</th>
                  <th scope="col">Título</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Quitar</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((manga) => (
                  <CartList key={manga.id} manga={manga} />
                ))}
              </tbody>
            </table>
            <h3
              className="custom-font
            "
            >
              Tu total a pagar es: ${totalPrice()}{" "}
            </h3>

            <button className="btn btn-outline-dark center" onClick={emptyCart}>
              Vaciar carrito
            </button>
          </div>
          <Form setId={setId} id={id} />
        </div>
      ) : (
        <div className="empty-cart">
          <h2> Tu carrito está vacio</h2>
          <Link to={"/"}>
            <button className=" btn btn-outline-success">Ir a comprar</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartContainer;
