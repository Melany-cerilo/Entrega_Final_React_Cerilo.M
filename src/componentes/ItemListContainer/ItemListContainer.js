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
  const [cargando, setCargando] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "mangas");
    const queryFilter = categoriaId
      ? query(queryCollection, where("categoria", "==", categoriaId))
      : queryCollection;

    getDocs(queryFilter)
      .then((resp) =>
        setMangas(resp.docs.map((manga) => ({ id: manga.id, ...manga.data() })))
      )
      .finally(() => setCargando(false))
      .catch((error) => console.log(error));
  }, [categoriaId]);

  return (
    <>
      {categoriaId === undefined ? <Greeting /> : <></>}
      {cargando ? <Loading /> : <ItemList arrayMangas={mangas} />}
    </>
  );
};

export default ItemListContainer;
