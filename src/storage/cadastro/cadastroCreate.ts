import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { cadastroGetAll } from "./cadastroGetAll";

export async function cadastroCreate(id: string, newCadastro: string, sobrenome: string, nascimento: string, genero: string, cidade: string, telefone: string, email: string, senha: string, dor: string, doenca: string, cirurgico: string, esporte: string){
    try {
        const storadeCadastro = await cadastroGetAll();

        const storage = JSON.stringify([...storadeCadastro, id, newCadastro, sobrenome, nascimento, genero, cidade, telefone, email, senha, dor, doenca, cirurgico]);
        
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);


    } catch (error) {
        throw error;
    }
}