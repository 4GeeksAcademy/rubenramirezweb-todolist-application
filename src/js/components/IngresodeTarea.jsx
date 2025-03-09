import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/IngresodeTarea.css';

function IngresodeTarea(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();

    if (input.trim() === "") return; // Evita agregar tareas vacías

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva);
    setInput(''); // Limpia el input después de presionar enter o enviar con el botón
  };

  return (
    <form 
        className='tarea-formulario'
        onSubmit={manejarEnvio}> 
        <input 
            className='tarea-input'
            type='text'
            placeholder='Agrega una tarea...'
            name='texto'
            value={input}
            onChange={manejarCambio}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                manejarEnvio(e);
              }
            }}
        />
        <button className='tarea-boton'>Guardar tarea</button>
    </form>
  );
}

export default IngresodeTarea;
