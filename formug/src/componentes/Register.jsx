import React from 'react';
import './Form.css';

const Register = () => {
  let concursantes = JSON.parse(localStorage.getItem("values"));
  console.log(concursantes);

  return (
    <div className='form-content-right'>
      <h1 className='form-success'>  Lista de Inscritos</h1>
      <div>
        {
          concursantes.map( (concursante) => (
            <h1> {concursante.nombre} </h1>
          ) )
        }
      </div>
    </div>
  );
};

export default Register;