import { getTareasRepository, agregarTareaRepository, editarTareaRepository } from "../repository/tarea.js";

export const getTareasServices = async () => {
    try {
        return getTareasRepository();
    } catch (error) {
        console.error('Error en el servicio: ', error);
        throw new Error('Error al obtener las tareas');
    }
}

export const agregarTareaServices = async (tarea) => {
    try {
        const tareaNueva = await agregarTareaRepository(tarea);
        return tareaNueva;

    } catch (error) {
        console.error('Error : ', error);
        throw new Error('Error al aregegar la tarea nueva');
    }
}

export const editarTareaService = async (id, tarea) => {
    try {
        return editarTareaRepository(id,tarea);
    } catch (error) {
        console.error('Error en el service', error);
        throw new Error('Error al editar la tarea');  
    }
}