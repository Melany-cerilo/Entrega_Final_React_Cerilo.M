import React from "react";

import ItemCount from "../../ItemCount/ItemCount";
import "./itemDetail.css";

const ItemDetail = ({ mangaDetail }) => {
  const add = () => {
    alert("agregado");
  };
  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={mangaDetail.imagen} alt="nombre" />
      </div>
      <div className="product-details">
        <h2>{mangaDetail.titulo}</h2>
        <p>Categoria:{mangaDetail.categoria}</p>
        <p>Precio: ${mangaDetail.precio}</p>
        <p>Detalle: {mangaDetail.detalle}</p>
        <ItemCount valorInicial={1} stock={mangaDetail.stock} add={add} />
      </div>
    </div>
  );
};

export default ItemDetail;
