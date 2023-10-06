import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import Button from "react-bootstrap/Button";

import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";
import ItemCount from "../../ItemCount/ItemCount";
import "./Item.css";

const Item = (manga) => {
  const { addManga } = useCartContext();

  //función para llamar al agregado del manga y mostrar el resultado ok, o no ok.
  const add = (counter, stock) => {
    if (addManga({ ...manga.mangaUnit, quantity: counter }, stock)) {
      Swal.fire({
        icon: "success",
        title: `Agregado al carrito: ${manga.mangaUnit.titulo}`,
        text: `Unidades:    ${counter} `,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: `No hay stock de: ${manga.mangaUnit.titulo}`,
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
        src={manga.mangaUnit.imagen}
      />
      <Card.Body>
        <Card.Title>{manga.mangaUnit.titulo}</Card.Title>
        <Card.Text>Precio: ${manga.mangaUnit.precio}</Card.Text>
        <Button
          as={Link}
          to={`/item/${manga.mangaUnit.id}`}
          variant="secondary"
          className="mb-2"
        >
          Detalle
        </Button>

        <ItemCount initialValue={1} stock={manga.mangaUnit.stock} add={add} />
      </Card.Body>
    </Card>
  );
};

export default Item;
