import { DateTimePickerEvent } from "@react-native-community/datetimepicker"
import { useSQLiteContext } from "expo-sqlite"


export type CadastroDatabase ={
    id: number
    nome: string
    sobrenome: string
    nascimento: string
    genero: string
    cidade: string
    uf: string
    telefone: number
    email: string
    senha: string
    dor: string
    doenca: string
    cirurgico: string
    esporte: string
}


export function useCadastroDatabase(){

    const database = useSQLiteContext()


    async function create(data: Omit<CadastroDatabase, "id">) {

        const statement = await database.prepareAsync(
            "INSERT INTO paciente (nome, sobrenome, nascimento, genero, cidade, uf, telefone, email, senha, dor, doenca, cirurgico, esporte) VALUES ($nome, $sobrenome, $nascimento, $genero, $cidade, $uf, $telefone, $email, $senha, $dor, $doenca, $cirurgico, $esporte)"
        )
        try {
            const result = await statement.executeAsync({
                $nome: data.nome,
                $sobrenome: data.sobrenome,
                $nascimento: data.nascimento,
                $genero: data.genero,
                $cidade: data.cidade,
                $uf: data.uf,
                $telefone: data.telefone,
                $email: data.email,
                $senha: data.senha,
                $dor: data.dor,
                $doenca: data.doenca,
                $cirurgico: data.cirurgico,
                $esporte: data.esporte
            })

            const inserteRowId = result.lastInsertRowId.toLocaleString()
            return { inserteRowId}
        } catch (error) {
            throw error
        }
    }

    return { create }
}