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

  // creo este flag para marcar validación correcta
  const [validationOk, setValidationOk] = useState(false);

  const { cartList, emptyCart, totalPrice } = useCartContext();

  //función para insertar una orden en db
  const generateOrder = (evt) => {
    evt.preventDefault();

    const order = {};
    //lleno objeto order con datos del form
    order.comprador = {
      dataForm,
    };
    //inserto mangas comprados en order
    order.mangas = cartList.map((manga) => {
      return {
        id: manga.id,
        título: manga.titulo,
        precio: manga.precio,
        quantity: manga.quantity,
      };
    });
    //inserto precio total en order
    order.total = totalPrice();
    //inserto order en bd
    const queryDB = getFirestore();
    const ordersColecction = collection(queryDB, "ordenes");
    addDoc(ordersColecction, order)
      .then(({ id }) => setId(id))
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => {
        setDataForm({
          nombre: "",
          telefono: "",
          mail: "",
        });
        emptyCart();
      });
    //actualizo stock de mangas en bd
    cartList.forEach((manga) => {
      const queryDB = getFirestore();
      const queryUpdate = doc(queryDB, "mangas", manga.id);
      const newStock = manga.stock - manga.quantity;
      updateDoc(queryUpdate, {
        stock: newStock,
      });
    });
  };
  //creo función para evento onChange
  const handleOnChange = (evt) => {
    const inputName = evt.target.name;
    const inputValue = evt.target.value;
    dataForm[inputName] = inputValue;
    setDataForm({
      ...dataForm,
    });
    //validaciones del form
    setValidationOk(true);
    let errorGenProp = "";

    //validación dinamica general para que los campos tengan de 3 a 15 caracteres.
    if (
      (inputValue.length < 3 || inputValue.length > 20) &&
      inputValue !== ""
    ) {
      errors[inputName] = `${inputName} debe contener de 3 a 20 caracteres.`;
      setValidationOk(false);
      //Marco la propiedad si hubo error para luego no limpiar ese texto en las validaciones especificas
      errorGenProp = inputName;
    } else {
      errors[inputName] = "";
    }
    //validación especifica de teléfono para que solo tenga números
    if (!/^[0-9]+$/.test(dataForm.telefono) && dataForm.telefono !== "") {
      errors.telefono = "El teléfono solo debe contener números.";
      setValidationOk(false);
    } else if (errorGenProp !== "telefono") {
      errors.telefono = "";
    }
    //validación especifica del validar mail para que sea igual al mail
    if (dataForm.mail !== dataForm.validarMail && dataForm.validarMail !== "") {
      errors.validarMail = "El mail de validacion debe coincidir con el mail.";
      setValidationOk(false);
    } else if (errorGenProp !== "validarMail") {
      errors.validarMail = "";
    }
    //valido que no esten vacios
    if (
      !dataForm.nombre ||
      !dataForm.telefono ||
      !dataForm.mail ||
      !dataForm.validarMail
    ) {
      setValidationOk(false);
    }
    //seteo los errores, para luego mostrarlos en pantalla
    setErrors({
      ...errors,
    });
  };
  //muestro el form y solo muestro botón si las validaciones estan correctas
  return (
    <>
      <div className="form-container">
        <form onSubmit={generateOrder} className="custom-form">
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

          {validationOk && (
            <button className="btn btn-success">Generá tu orden</button>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
