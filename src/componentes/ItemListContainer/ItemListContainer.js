import React, { useEffect, useState } from "react";

import { mockFetch } from "../../utils/mockFetch";
import Spinner from "react-bootstrap/Spinner";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [mangas, setMangas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      mockFetch()
        .then((data) =>
          setMangas(data.filter((mangas) => categoriaId === mangas.categoria))
        )
        .finally(() => setCargando(false))
        .catch((error) => console.log(error));
    } else {
      mockFetch()
        .then((data) => setMangas(data))
        .finally(() => setCargando(false))
        .catch((error) => console.log(error));
    }
  }, [categoriaId]);

  return (
    <>
      {cargando ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Spinner
            animation="grow"
            variant="danger"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      ) : (
        <ItemList arrayMangas={mangas} />
      )}
    </>
  );
};

export default ItemListContainer;
