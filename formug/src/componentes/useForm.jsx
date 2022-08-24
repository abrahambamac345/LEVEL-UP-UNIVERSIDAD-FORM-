import { useState, useEffect } from "react";

 let participantes = JSON.parse(localStorage.getItem("values"));
const useForm = (callback, validacion) => {
 
  const [participantes, setParticipantes] = useState(participantes || []);

  const [values, setValues] = useState({
    carné: "",
    nombre: "",
    dirección: "",
    genero: "",
    teléfono: "",
    fecha: "",
    carrera: "",
    poesía: "",

  });
  const [errors, setErrors] = useState({});
 const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validacion(values));
    setIsSubmitting(true);
    setParticipantes(...participantes, values);
  };


  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
         localStorage.setItem('values', JSON.stringify(participantes));
      }
     
    }
  );

  return { handleChange, handleSubmit, values, errors };
};


export default useForm;