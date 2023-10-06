import React from "react";

const Greeting = () => {
  return (
    <div className="mb-5">
      <div className="titulo">
        <h1 className="display-1 text-center m-2  ">
          Bienvenidos a MangaManía
        </h1>
        <h4 className="display-6 text-center m-4">
          Navegá por nuestras categorias y encontrá tus mangas favoritos.
        </h4>
      </div>

      <img
        src="https://i.ibb.co/rfb4Vv4/miheroacademy.jpg"
        className="img-fluid w-100"
        alt="M_H_academy"
      />
    </div>
  );
};

export default Greeting;
