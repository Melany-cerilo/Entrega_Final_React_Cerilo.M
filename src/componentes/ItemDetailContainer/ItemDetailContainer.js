import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [mangaDetail, setMangaDetail] = useState({});
  const [cargando, setCargando] = useState(true);
  const { mangaId } = useParams();

  useEffect(() => {
    const tiempoDeEspera = 2000;
    const db = getFirestore();
    const queryDocument = doc(db, "mangas", mangaId);
    setTimeout(() => {
      getDoc(queryDocument)
        .then((resp) => ({ id: resp.id, ...resp.data() }))
        .then((resp) => setMangaDetail(resp))
        .finally(() => setCargando(false))
        .catch((error) => console.log(error));
    }, tiempoDeEspera);
  }, [mangaId]);

  return (
    <>{cargando ? <Loading /> : <ItemDetail mangaDetail={mangaDetail} />}</>
  );
};

export default ItemDetailContainer;
