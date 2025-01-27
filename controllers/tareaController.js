import { Tarea } from "../repository/models/tarea.js";
import { getTareasServices, agregarTareaServices, editarTareaService } from "../services/tarea.js";
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

export const editarTareaController = async (req, res) => {
    const { id } = req.params;
    const tarea = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({mesanje: 'ID invalido'});
    }
    try {
       const tareaActualizada = await editarTareaService(id,tarea);
       if(!tareaActualizada){
        return res.status(404).send({ mensaje: `No se encontró ninguna tarea con ID ${id}`})
       }
        return res.status(200).send({ mensaje: 'La tarea ha sido editada correctamente', Tarea: tareaActualizada });
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al actualizar la tarea', error });
    }
};
/*
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
