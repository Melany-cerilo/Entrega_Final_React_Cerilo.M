import React from "react";
import Card from "react-bootstrap/Card";

import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <>
      <Card>
        <Card.ImgOverlay>
          <Card.Title>
            <h1 className="display-1 text-center margen-h1  fw-medium">
              {props.greeting}
            </h1>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <img
        src="https://i.ibb.co/rfb4Vv4/miheroacademy.jpg"
        className="img-fluid w-100 margen"
        alt="M_H_academy"
      />
    </>
  );
};

export default ItemListContainer;
