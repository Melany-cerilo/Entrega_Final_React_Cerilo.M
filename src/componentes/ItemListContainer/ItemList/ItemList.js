import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = (mangas) => {
  return (
    <div className="cardgroup-custom">
      {mangas.arrayMangas.map((manga) => (
        <Item key={manga.id} unidadManga={manga} />
      ))}
    </div>
  );
};

export default ItemList;
