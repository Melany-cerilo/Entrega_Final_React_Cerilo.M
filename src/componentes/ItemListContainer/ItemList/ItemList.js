import React from "react";
import Item from "../Item/Item";

const ItemList = (mangas) => {
  return mangas.arrayMangas.map((manga) => (
    <Item key={manga.id} unidadManga={manga} />
  ));
};

export default ItemList;
