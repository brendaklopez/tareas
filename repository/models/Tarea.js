import mongoose from 'mongoose';

const tareaSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
        
    },
    completo:{
        type: Boolean,
        
    },
    fecha:{
        type: Date,
        default: Date.now,
    },

});

export const Tarea = mongoose.model('Tarea', tareaSchema);