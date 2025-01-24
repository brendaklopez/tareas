import express from 'express';
import { express_config } from './config.js';
import tareaRoutes from './routes/tareaRoutes.js'; // Rutas de tareas

const app = express();

app.set('port', express_config.port);
app.set('host', express_config.host);

app.use(express.json());
app.use(tareaRoutes); // Registrar rutas de tareas

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Servidor corriendo en http://${app.get('host')}:${app.get('port')}`);
});
