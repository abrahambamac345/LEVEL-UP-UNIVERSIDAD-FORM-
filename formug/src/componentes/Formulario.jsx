import React from 'react'
import useForm from './useForm';
import validacion from './validacion';
import { Link } from "react-router-dom";

const Formulario = ({submitForm}) => {
    const { handleChange, handleSubmit, values, errors} = useForm(submitForm, validacion);
  return (
        <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}> 
        <h1>UNIVERSIDAD DE GUATEMALA</h1>
        <h2>Primer Seminario de Poesía</h2>
          <div className="form-inputs">
              <label className="form-label">Carné</label>
               <input 
               id='carné'
               className='form-input'
               type="text" 
               name="carné"
               placeholder= " Carné Universitario"  
               value={values.carné}
               onChange={handleChange}
               />
               {errors.carné && <p>{errors.carné}</p>}
          </div>
          <div className='form-inputs'>
              <label className="form-label">Nombre</label>
               <input 
               id='nombre'
               className='form-input'
               type="text"
               name="nombre" 
               placeholder= " Nombre Completo"
               value={values.nombre}
               onChange={handleChange}
                />
                {errors.nombre && <p>{errors.nombre}</p>}
          </div>
          <div className='form-inputs'>
              <label className="form-label">Dirección</label>
               <input 
               id='dirección'
               className='form-input'
               type="text" 
               name="dirección"
               placeholder= " Dirección Domiciliar"
               value={values.dirección}
               onChange={handleChange}
               />
               {errors.dirección && <p>{errors.dirección}</p>}
          </div>
          <div className='form-inputs' >
              < label className='form-label'>Genero</label>
               <select 
                className='form-input'
                name="genero" 
                value={values.genero}
                onChange={handleChange} 
               >
                <option value="Genero">Seleccionar Genero</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
               </select>
          </div>
          <div className='form-inputs'>
              <label className='form-label'>Teléfono</label>
               <input 
               id='teléfono'
               className='form-input'
               type="text"
               name="teléfono"
               placeholder= " Teléfono Personal"
               value={values.teléfono}
               onChange={handleChange}
             />
             
             {errors.teléfono && <p>{errors.teléfono}</p>}
          </div>
          <div className='form-inputs'>
              <label label className='form-label'>Fecha de Nacimiento</label>
               <input 
            className='form-input'
               type="date" 
               name="fecha" 
               value={values.fecha}
               onChange={handleChange} />
          </div>
          <div className='form-inputs'>
              <label className='form-label'>Carrera Universitaria</label>
              <select 
              className='form-input'
               name="carrera" 
               value={values.carrera}
               onChange={handleChange}>
                <option value="Carrera">Carrera Universitaria</option>
                <option value="Ingeniería Química">Ingeniería Química</option>
                <option value="Ingeniería Civil">Ingeniería Civil</option>
                <option value="Ingeniería Biomédica">Ingeniería Biomédica</option>
                <option value="Ingeniería en Sistemas<">Ingeniería en Sistemas</option>
                <option value="Ingeniería Mecatrónica<">Ingeniería Mecatrónica</option>
                <option value="Ingeniería Industrial">Ingeniería Industrial</option>
                <option value="Ingeniería Ambiental">Ingeniería Ambiental</option>
                <option value="Ingeniería Electrónica">Ingeniería Electrónica</option>
                <option value="Licenciatura en Educación">Licenciatura en Educación</option>
                <option value="Licenciatura en Pedagogía">Licenciatura en Pedagogía</option>
                <option value="Licenciatura en Medicina">Licenciatura en Medicina</option>
                <option value="Licenciatura en Psicología">Licenciatura en Psicología</option>
                <option value="Licenciatura en Derecho">Licenciatura en Derecho</option>
                <option value="Licenciatura en Audio Visuales">Licenciatura en Audio Visuales</option>
                <option value="Licenciatura en Literatura">Licenciatura en Literatura</option>
                <option value="Licenciatura en Trabajo Social">Licenciatura en Trabajo Social </option>
                <option value="Licenciatura en Ciencias Sociales">Licenciatura en Ciencias Sociales</option>
                <option value="Arquitectura">Arquitectura</option>
                
          
               </select>
          </div>
          <div className='form-inputs'>
              <label className='form-label'>Género de Poesía</label>
              <select 
              className='form-input'
              name="poesía" 
              value={values.poesía}
              onChange={handleChange}
             >
              <option value="Género de Poesía">Género de Poesía</option>
                <option value="Lírica">Lírica</option>
                <option value="Épica">Épica</option>
                <option value="Dramática">Dramática</option>

               </select>
          </div>
          <button className='form-input-btn' type='submit'> Enviar este formulario </button>
          <h3>LISTADO DE INSCRITOS</h3>
          <footer className='link' >
        <Link to="/register"> Inscritos ¡Click Aquí!</Link>
          </footer>  
            </form>  
    </div>
      
        
 
  );
}

export default Formulario;