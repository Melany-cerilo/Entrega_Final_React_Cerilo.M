import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./Form.css";

const Form = ({ setId }) => {
  const [dataForm, setDataForm] = useState({
    nombre: "",
    telefono: "",
    mail: "",
    validarMail: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    telefono: "",
    mail: "",
    validarMail: "",
  });

  const [validacionExitosa, setValidacionExitosa] = useState(false);

  const { listaCarrito, vaciarCarrito, precioTotal } = useCartContext();

  const generarOrden = (evt) => {
    evt.preventDefault();

    //insertar una orden en db
    const orden = {};
    orden.comprador = {
      dataForm,
    };
    orden.mangas = listaCarrito.map((manga) => {
      return {
        id: manga.id,
        título: manga.titulo,
        precio: manga.precio,
        quantity: manga.quantity,
      };
    });
    orden.total = precioTotal();
    const queryDB = getFirestore();
    const ordersColecction = collection(queryDB, "ordenes");
    addDoc(ordersColecction, orden)
      .then(({ id }) => setId(id))
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => {
        setDataForm({
          nombre: "",
          telefono: "",
          mail: "",
        });
        vaciarCarrito();
      });

    listaCarrito.forEach((manga) => {
      const queryDB = getFirestore();
      const queryUpdate = doc(queryDB, "mangas", manga.id);
      const nuevoStock = manga.stock - manga.quantity;
      updateDoc(queryUpdate, {
        stock: nuevoStock,
      });
    });
  };
  const handleOnChange = (evt) => {
    const inputName = evt.target.name;
    const inputValue = evt.target.value;
    dataForm[inputName] = inputValue;
    setDataForm({
      ...dataForm,
    });

    setValidacionExitosa(true);

    let errorGenProp = "";

    if (
      (inputValue.length < 3 || inputValue.length > 15) &&
      inputValue !== ""
    ) {
      errors[inputName] = `${inputName} debe contener de 3 a 15 caracteres.`;
      setValidacionExitosa(false);
      errorGenProp = inputName;
    } else {
      errors[inputName] = "";
    }

    if (!/^[0-9]+$/.test(dataForm.telefono) && dataForm.telefono !== "") {
      errors.telefono = "El teléfono solo debe contener números.";
      setValidacionExitosa(false);
    } else if (errorGenProp !== "telefono") {
      errors.telefono = "";
    }

    if (dataForm.mail !== dataForm.validarMail && dataForm.validarMail !== "") {
      errors.validarMail = "El mail de validacion debe coincidir con el mail.";
      setValidacionExitosa(false);
    } else if (errorGenProp !== "validarMail") {
      errors.validarMail = "";
    }

    if (
      !dataForm.nombre ||
      !dataForm.telefono ||
      !dataForm.mail ||
      !dataForm.validarMail
    ) {
      setValidacionExitosa(false);
    }

    setErrors({
      ...errors,
    });
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={generarOrden} className="custom-form">
          <div className="input-group">
            <p className="center">
              Completa tus datos para recibir tu ID de orden
            </p>
            <input
              type="text"
              name="nombre"
              placeholder="Ingresa tu Nombre"
              value={dataForm.nombre}
              onChange={handleOnChange}
              className="custom-input"
            />
            <p className="error">{errors.nombre}</p>
            <input
              type="text"
              name="telefono"
              placeholder="Ingresa tu Teléfono "
              value={dataForm.telefono}
              onChange={handleOnChange}
              className="custom-input"
            />
            <p className="error">{errors.telefono}</p>
            <input
              type="text"
              name="mail"
              placeholder="Ingresa tu Mail"
              value={dataForm.mail}
              onChange={handleOnChange}
              className="custom-input"
            />
            <p className="error">{errors.mail}</p>
            <input
              type="text"
              name="validarMail"
              placeholder="Valida tu mail"
              value={dataForm.validarMail}
              onChange={handleOnChange}
              className="custom-input"
            />
            <p className="error">{errors.validarMail}</p>
          </div>

          {validacionExitosa && (
            <button className="btn btn-success">Generá tu orden</button>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
