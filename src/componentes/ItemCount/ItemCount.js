import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Swal from "sweetalert2";

const ItemCount = ({ initialValue, stock, add }) => {
  const [counter, setCounter] = useState(initialValue);

  //función para sumar contador de cantidad de mangas para agregar al carrito
  const addCounter = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  //función para restar contador de cantidad de mangas para agregar al carrito
  const subtractCounter = () => {
    if (counter > initialValue) {
      setCounter(counter - 1);
    }
  };

  //agrega a carrito, pero si stock es menor a 1 muestra alert 'no hay stock
  const onAdd = () => {
    if (stock < 1) {
      Swal.fire({
        icon: "error",
        title: `No hay stock`,
      });
    } else {
      add(counter, stock);
    }
  };
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="light" onClick={addCounter}>
        +
      </Button>
      <Button variant="light" disabled>
        {counter}
      </Button>
      <Button variant="light" onClick={subtractCounter}>
        -
      </Button>
      <Button variant="light" onClick={onAdd}>
        ADD TO 🛒
      </Button>
    </ButtonGroup>
  );
};

export default ItemCount;
