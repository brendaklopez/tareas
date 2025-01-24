import { getTareasRepository } from "../repository/tarea.js";

export const getTareasServices = async () => {
    try {
        return getTareasRepository();
    } catch (error) {
        console.error('Error en el servicio: ', error);
        throw new Error('Error al obtener las tareas');
    }
}