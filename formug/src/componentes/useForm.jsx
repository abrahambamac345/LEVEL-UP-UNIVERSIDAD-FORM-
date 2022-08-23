import { useState, useEffect  } from "react";


const useForm = (callback, validacion ) => {
    const [values, setValues]= useState ( {
            carné: "",
            nombre: "",
            dirección: "",
            genero: "",
            teléfono: "",
            fecha: "", 
            carrera: "",
            poesía:"",
    
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
    
      };


      useEffect(
        () => {
        localStorage.setItem('values',JSON.stringify(values));

         if (Object.keys(errors).length === 0 && isSubmitting) {
          callback();
          }
        }
        );

      return { handleChange, handleSubmit, values, errors};
       };
    
       
export default useForm;