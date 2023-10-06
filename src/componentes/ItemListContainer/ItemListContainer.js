import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Greeting from "../Greeting/Greeting";

const ItemListContainer = () => {
  const [mangas, setMangas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  //useEffect para traer de BD mangas, todos o por categoria seleccionada mediante ruta
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "mangas");
    const queryFilter = categoryId
      ? query(queryCollection, where("categoria", "==", categoryId))
      : queryCollection;

    getDocs(queryFilter)
      .then((resp) =>
        setMangas(resp.docs.map((manga) => ({ id: manga.id, ...manga.data() })))
      )
      .finally(() => setLoading(false))
      .catch((error) => console.log(error));
  }, [categoryId]);

  //pregunto para saber si estoy en una categoria o estoy en home, si estoy en home muestro el componente de bienvenida
  return (
    <>
      {categoryId === undefined ? <Greeting /> : <></>}
      {loading ? <Loading /> : <ItemList arrayMangas={mangas} />}
    </>
  );
};

export default ItemListContainer;
