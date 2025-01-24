import { getTareasServices } from "../services/tarea.js";
// Crear una nueva tarea
/*
export const crearTarea = async (req, res) => {
    try {
        const { titulo, descripcion } = req.body;
        const nuevaTarea = new Tarea({ titulo, descripcion });
        const tareaGuardada = await nuevaTarea.save();
        res.status(201).json(tareaGuardada);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la tarea', error });
    }
};*/

// Obtener todas las tareas
export const getTareasController = async (req, res) => {
    try {
        let tareas = await getTareasServices();
        if (tareas.length === 0) {
            return res.status(200).send('La bbdd esta vacia');
        }
        return res.statis(200).send(tareas);
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