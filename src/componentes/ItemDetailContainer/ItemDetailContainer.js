import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockFetch } from "../../utils/mockFetch";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [mangaDetail, setMangaDetail] = useState({});
  const { mangaId } = useParams();

  useEffect(() => {
    mockFetch(Number(mangaId))
      .then((resp) => setMangaDetail(resp))
      .catch((error) => console.log(error));
  }, [mangaId]);
  return <ItemDetail mangaDetail={mangaDetail} />;
};

export default ItemDetailContainer;
