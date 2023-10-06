import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import Button from "react-bootstrap/Button";

import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";
import ItemCount from "../../ItemCount/ItemCount";
import "./Item.css";

const Item = (manga) => {
  const { agregarManga } = useCartContext();

  const add = (contador, stock) => {
    if (agregarManga({ ...manga.unidadManga, quantity: contador }, stock)) {
      Swal.fire({
        icon: "success",
        title: `Agregado al carrito: ${manga.unidadManga.titulo}`,
        text: `Unidades:    ${contador} `,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: `No hay stock de: ${manga.unidadManga.titulo}`,
        text: `Ya sumaste todo al carrito`,
      });
    }
  };

  return (
    <Card
      className="d-inline-block m-3 text-center bg"
      style={{ width: "18rem", height: "auto" }}
    >
      <Card.Img
        className="imagen-personalizada"
        variant="top"
        src={manga.unidadManga.imagen}
      />
      <Card.Body>
        <Card.Title>{manga.unidadManga.titulo}</Card.Title>
        <Card.Text>Precio: ${manga.unidadManga.precio}</Card.Text>
        <Button
          as={Link}
          to={`/detalle/${manga.unidadManga.id}`}
          variant="secondary"
          className="mb-2"
        >
          Detalle
        </Button>

        <ItemCount valorInicial={1} stock={manga.unidadManga.stock} add={add} />
      </Card.Body>
    </Card>
  );
};

export default Item;
