import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../../styles/IngresodeTarea.css';

function IngresodeTarea(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  }


  return (
    <form 
        className='tarea-formulario'
        onSubmit={manejarEnvio}> 
        <input 
            className='tarea-input'
            type='texto'
            placeholder='Escribe aquí una tarea...'
            name='texto'
            onChange={manejarCambio}
        />
        <button className='tarea-boton'>Agregar tarea</button>
    </form>
  )
}

export default IngresodeTarea;