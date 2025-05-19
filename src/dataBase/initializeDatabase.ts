import { type SQLiteDatabase} from "expo-sqlite"

export async function initializeDatabase( dataBase: SQLiteDatabase){

    await dataBase.execAsync(`
        CREATE TABLE IF NOT EXISTS patient (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL, 
            sobrenome TEXT NOT NULL,
            nascimento DATETIME NOT NULL,
            genero TEXT NOT NULL,
            cidade TEXT NOT NULL,
            uf TEXT NOT NULL,
            telefone INTEGER NOT NULL, 
            email TEXT NOT NULL,
            senha INTEGER NOT NULL,
            dor TEXT NOT NULL,
            doenca TEXT NOT NULL,
            cirurgico TEXT NOT NULL,
            esporte TEXT NOT NULL
        );    
    `)
}