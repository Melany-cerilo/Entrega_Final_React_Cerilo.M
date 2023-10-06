import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [mangaDetail, setMangaDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { mangaId } = useParams();
  // useEffect para traer el manga que se esta pidiendo mostrar.
  useEffect(() => {
    const timeOut = 2000;
    const db = getFirestore();
    const queryDocument = doc(db, "mangas", mangaId);
    setTimeout(() => {
      getDoc(queryDocument)
        .then((resp) => ({ id: resp.id, ...resp.data() }))
        .then((resp) => setMangaDetail(resp))
        .finally(() => setLoading(false))
        .catch((error) => console.log(error));
    }, timeOut);
  }, [mangaId]);

  return (
    <>{loading ? <Loading /> : <ItemDetail mangaDetail={mangaDetail} />}</>
  );
};

export default ItemDetailContainer;
