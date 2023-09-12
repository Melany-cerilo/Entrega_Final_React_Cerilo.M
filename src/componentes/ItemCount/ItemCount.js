import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

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
    add(contador);
  };
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick={sumaContador}>
        + 1
      </Button>
      <Button variant="secondary">{contador}</Button>
      <Button variant="secondary" onClick={restaContador}>
        - 1
      </Button>
      <Button variant="secondary" onClick={onAdd}>
        ADD TO 🛒
      </Button>
    </ButtonGroup>
  );
};

export default ItemCount;
