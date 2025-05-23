import { useSQLiteContext } from "expo-sqlite"
import { useState } from "react"


export type CadastroDatabase = {
    id: number
    nome: string
    sobrenome: string
    nascimento: string
    genero: string
    cidade: string
    uf: string
    telefone: string
    email: string
    senha: string
    dor: string
    doenca: string
    cirurgico: string
    esporte: string
}


export function useCadastroDatabase(){
    const database = useSQLiteContext();
    const [loggedUser, setLoggedUser] = useState<CadastroDatabase | null>(null)

    async function create(data: Omit<CadastroDatabase, "id">) {
        const statement = await database.prepareAsync(
            "INSERT INTO patient (nome, sobrenome, nascimento, genero, cidade, uf, telefone, email, senha, dor, doenca, cirurgico, esporte) VALUES ($nome, $sobrenome, $nascimento, $genero, $cidade, $uf, $telefone, $email, $senha, $dor, $doenca, $cirurgico, $esporte)"
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
                $esporte: data.esporte,
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString()
            return { insertedRowId }
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }
  async function searchByName(email: string, senha: string) {
    try {
      const query = "SELECT * FROM patient WHERE email LIKE ?"

      const response = await database.getAllAsync<CadastroDatabase>(
        query,
        `%${email}%`,
        `%${senha}%`
      )

      return response
    } catch (error) {
      throw error
    }
  }

  async function update(data: CadastroDatabase) {
    const statement = await database.prepareAsync(
      "UPDATE patient SET nome = $nome, senha = $senha WHERE id = $id"
    )

    try {
      await statement.executeAsync({
                $id: data.id,
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
                $esporte: data.esporte,
      })
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  async function remove(id: number) {
    try {
      await database.execAsync("DELETE FROM patient WHERE id = " + id)
    } catch (error) {
      throw error
    }
  }

  async function show(id: number) {
    try {
      const query = "SELECT * FROM patient WHERE id = ?"

      const response = await database.getFirstAsync<CadastroDatabase>(query, [
        id,
      ])

      return response
    } catch (error) {
      throw error
    }
  }

  async function authUser(email: string, senha: string): Promise<CadastroDatabase | null> {
    try {
      const query = "SELECT * FROM patient WHERE email = ? AND senha = ?";

      const response = await database.getFirstAsync<CadastroDatabase>(query, [
        email,
        senha,
      ]);

      if (response) {
        setLoggedUser(response)
      } else {  
        setLoggedUser(null); 
      }
      return response ;
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error) 
      throw error
    }
  }



  return { create, searchByName, update ,remove, show, authUser }
}



