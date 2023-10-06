import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Swal from "sweetalert2";

const ItemCount = ({ valorInicial, stock, add }) => {
  const [contador, setContador] = useState(valorInicial);

  const sumaContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restaContador = () => {
    if (contador > valorInicial) {
      setContador(contador - 1);
    }
  };
  const onAdd = () => {
    if (stock < 1) {
      Swal.fire({
        icon: "error",
        title: `No hay stock`,
      });
    } else {
      add(contador, stock);
    }
  };
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="light" onClick={sumaContador}>
        +
      </Button>
      <Button variant="light" disabled>
        {contador}
      </Button>
      <Button variant="light" onClick={restaContador}>
        -
      </Button>
      <Button variant="light" onClick={onAdd}>
        ADD TO 🛒
      </Button>
    </ButtonGroup>
  );
};

export default ItemCount;
