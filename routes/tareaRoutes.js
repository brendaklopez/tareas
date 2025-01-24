import { Router } from "express";
import { getTareasController } from '../controllers/tareaController.js';

const router = Router();

// Definir las rutas para tareas
router.post('/api/tareas', getTareasController);            // Crear tarea
router.get('/api/tareas', );          // Obtener todas las tareas
router.put('/api/tareas/:id', );    // Actualizar tarea por ID
router.delete('/api/tareas/:id', );   // Eliminar tarea por ID

export default router;

