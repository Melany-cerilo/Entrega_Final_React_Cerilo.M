import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import Form from "../form/Form";
import "./CartContainer.css";
const CartContainer = () => {
  const [id, setId] = useState();
  const { listaCarrito, vaciarCarrito, precioTotal } = useCartContext();

  return (
    <>
      {id !== undefined && (
        <h3 className="orden-generada">
          Tu orden de compra fue generada el ID es: {id}
        </h3>
      )}

      {listaCarrito.length > 0 ? (
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
                {listaCarrito.map((manga) => (
                  <CartList key={manga.id} manga={manga} />
                ))}
              </tbody>
            </table>
            <h3>Tu total a pagar es: ${precioTotal()} </h3>

            <button
              className="btn btn-outline-dark center"
              onClick={vaciarCarrito}
            >
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
