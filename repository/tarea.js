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

export const agregarTareaRepository = async (nuevaTarea) => {
    try {
        const tareaNueva = new Tarea(nuevaTarea);
        await tareaNueva.save();
        console.log(tareaNueva)
    } catch (error) {
        console.log('Error en el Repositorio', error);
        throw new Error('Error al agregar la tarea: ' + id + 'a la base de datos');
    }
}
