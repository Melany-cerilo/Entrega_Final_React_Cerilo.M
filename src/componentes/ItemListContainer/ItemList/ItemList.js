import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = (mangas) => {
  //retorno un componente item por cada manga
  return (
    <div className="cardgroup-custom">
      {mangas.arrayMangas.map((manga) => (
        <Item key={manga.id} mangaUnit={manga} />
      ))}
    </div>
  );
};

export default ItemList;
