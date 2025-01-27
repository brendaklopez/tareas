import { getTareasServices, agregarTareaServices } from "../services/tarea.js";
import mongoose from 'mongoose';
// Crear una nueva tarea

export const agregarTareaController = async (req, res) => {
    const tarea = req.body;
    try {
       const tareaNueva = await agregarTareaServices(tarea);
       return res.status(201).send({mensaje: 'Usuario agregado correctamente', Tarea: tareaNueva})
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({mensaje: 'Error al agregar al usuario'});
    }
};

// Obtener todas las tareas
export const getTareasController = async (req, res) => {
    try {
        let tareas = await getTareasServices();
        if (tareas.length === 0) {
            return res.status(200).send('La bbdd esta vacia');
        }
        return res.status(200).send(tareas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener tareas', error });
    }
};
/*  Actualizar una tarea
export const actualizarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const tareaActualizada = await Tarea.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(tareaActualizada);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar la tarea', error });
    }
};

// Eliminar una tarea
export const eliminarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        await Tarea.findByIdAndDelete(id);
        res.status(204).send(); // No Content
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la tarea', error });
    }
};
*/
//