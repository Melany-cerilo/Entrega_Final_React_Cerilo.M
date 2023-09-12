import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "../../ItemCount/ItemCount";
import "./Item.css";

const Item = (manga) => {
  const add = (contador) => {
    alert("Agregados al carrito: " + contador);
  };

  return (
    <Card
      className="d-inline-block m-3 text-center "
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
