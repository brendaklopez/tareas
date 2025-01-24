import { Tarea } from './models/tarea.js';
import {connect } from '../config/db.js';

connect();

export const getTareasRepository = async () => {
    try {
        const tareas = await Tarea.find()
        return tareas;
    } catch (error) {
       console.error('Error en el repositorio: ', error );
       throw new Error('Error al consultar por la coleccion "usuarios" en la base de datos');
    }    
}

