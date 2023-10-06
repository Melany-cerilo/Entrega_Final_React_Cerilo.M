import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner
        animation="grow"
        variant="danger"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default Loading;
