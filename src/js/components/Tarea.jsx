import React from 'react'
import { AiFillDelete } from "react-icons/ai";

import '../../styles/tarea.css';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? "tarea-contenedor completada": "tarea-contenedor"}>
        <div 
            className="tarea-texto"
            onClick={() => {completarTarea(id)}}>
            {texto}
        </div>
        <div 
            className="tarea-contenedor-iconos"
            onClick={() => {eliminarTarea(id)}}>
            <AiFillDelete className="tarea-icono" />
        </div>
    </div>
  )
}

export default Tarea;