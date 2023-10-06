import { useState } from "react";
import { useCartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ItemCount from "../../ItemCount/ItemCount";
import "./itemDetail.css";

const ItemDetail = ({ mangaDetail }) => {
  const [estaEnCart, setEstaEnCart] = useState(true);

  const { agregarManga } = useCartContext();

  const add = (contador, stock) => {
    setEstaEnCart(false);
    if (agregarManga({ ...mangaDetail, quantity: contador }, stock)) {
      Swal.fire({
        icon: "success",
        title: `Agregado al carrito: ${mangaDetail.titulo}`,
        text: `Unidades:    ${contador} `,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: `No hay stock de: ${mangaDetail.titulo}`,
        text: `Ya sumaste todo al carrito`,
      });
    }
  };

  return (
    <div className="product-detail">
      {mangaDetail.titulo !== undefined ? (
        <>
          <div className="product-image">
            <img
              src={mangaDetail.imagen}
              className="imagen-perso"
              alt="nombre"
            />
          </div>
          <div className="product-details">
            <h2>
              <u>{mangaDetail.titulo}</u>
            </h2>
            <p>
              <strong>Categoria:</strong> {mangaDetail.categoria}
            </p>
            <p>
              <strong>Precio:</strong> ${mangaDetail.precio}
            </p>
            <p>
              <strong>Detalle:</strong> {mangaDetail.detalle}
            </p>
            <p>
              <strong>Stock:</strong> {mangaDetail.stock}
            </p>
            {estaEnCart ? (
              <ItemCount valorInicial={1} stock={mangaDetail.stock} add={add} />
            ) : (
              <>
                <Link to={"/cart"}>
                  <button className=" btn btn-outline-warning">
                    ir al carrito
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className=" btn btn-outline-success">
                    seguir comprando
                  </button>
                </Link>
              </>
            )}
          </div>
        </>
      ) : (
        <h2 className="noEncontrado">Manga no encontrado</h2>
      )}
    </div>
  );
};

export default ItemDetail;
