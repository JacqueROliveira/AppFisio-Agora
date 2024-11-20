import { type SQLiteDatabase} from "expo-sqlite"
import { Database } from "phosphor-react-native"



export async function initializeDatabase( dataBase: SQLiteDatabase){

    await dataBase.execAsync(`
        CREATE TABLE IF NOT EXISTS paciente (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL, 
            sobrenome TEXT NOT NULL,
            nascimento DATETIME NOTE NULL,
            genero TEXT NOT NULL,
            cidade TEXT NOT NULL,
            uf TEXT NOT NULL,
            telefone INTEGER NOT NULL, 
            email TEXT NOT NULL,
            senha TEXT NOT NULL,
            dor TEXT NOT NULL,
            doenca TEXT NOT NULL,
            cirurgico TEXT NOT NULL,
            esporte TEXT NOT NULL
        );    
    `)
}