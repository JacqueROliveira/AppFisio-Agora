import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";


export async function cadastroGetAll(){
    
    try {
        const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    
        const cadastro: string[] = storage ? JSON.parse(storage) : [];
    
        return cadastro;
        
    } catch (error) {
        throw error;
    }
}