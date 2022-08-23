export default function validacion(values) {
    let errors = {};
  
    if (!values.carné.trim()) {
        errors.carné = 'Carné Requerido';
      } else if (!/^A[A-Za-z1-9]{4}[1,3,9]$/.test(values.carné)) {
        errors.carné = 'Primer caracter debe ser (A), el tercer debe ser 5,  el último carácter debe de terminar en 1,3 o 9; Ejemplo:A75693';
      }

      if (!values.nombre.trim()) {
        errors.nombre = 'Nombre Requerido' ;
      }else if ( !/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{2,254}/i.test(values.nombre)) {
          errors.nombre = 'No Alfanuméricos';
        }

        if (!values.dirección.trim()) {
            errors.dirección = 'Dirección Requerido';
          }

      if (!values.teléfono.trim()) {
        errors.teléfono = 'Teléfono Requerido' ;
      }else if (! /^([Z0-9]){1,16}$/i.test(values.teléfono)) {
          errors.teléfono = 'Unicamente numeros no (letras o Signos #&*-)';
        }
    return errors;
}