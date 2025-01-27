import { Router } from "express";
import { getTareasController, agregarTareaController, editarTareaController } from '../controllers/tareaController.js';

const router = Router();

// Definir las rutas para tareas
router.post('/tareas', agregarTareaController );            // Crear tarea
router.get('/tareas', getTareasController);          // Obtener todas las tareas
router.put('/tareas/:id', editarTareaController );    // Actualizar tarea por ID
//router.delete('/api/tareas/:id', );   // Eliminar tarea por ID

export default router;

