import React, { useState } from 'react'
import Formulario from './Formulario'
import FormReport from './FormReport';
import './Form.css';

const Form = () => {

const [isSubmitted, setIsSubmitted] = useState(false);

function submitForm() {
    setIsSubmitted(true);
  }
  return (
    
    <div>
        {!isSubmitted ? (
          <Formulario submitForm={submitForm} />
        ) : (
          <FormReport />
        )}
        </div>
  )
}

export default Form