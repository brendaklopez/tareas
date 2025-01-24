import { mongoose } from 'mongoose';
import { db_config } from '../config.js';

const uri = `mongodb+srv://${db_config.user}:${db_config.password}@${db_config.database}.bbqay.mongodb.net/?retryWrites=true&w=majority&appName=${db_config.database}`;

export async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("DB MongoDB conectada correctamente")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    
}