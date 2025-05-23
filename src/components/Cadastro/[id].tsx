import { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { useLocalSearchParams } from "expo-router"

import { useCadastroDatabase } from "@dataBase/useCadastroDatabase"


export default function Cadastro() {
  const [data, setData] = useState({
    nome: "",
    SobreNome: "",
    senha: "",
    nascimento: "",
    genero: "",
    cidade: "",
    uf: "",
    telefone: "",
    email: "",
    dor: "",
    doenca: "",
    cirurgico: "",
    esporte: "",
  })

  const CadastroDatabase = useCadastroDatabase()
  const params = useLocalSearchParams<{ id: string }>()

  useEffect(() => {
    if (params.id) {
      CadastroDatabase.show(Number(params.id)).then((response) => {
        if (response) {
          setData({
            nome: response.nome,
            SobreNome: response.sobrenome,      
            nascimento: response.nascimento,
            genero: response.genero,
            cidade: response.cidade,
            uf: response.uf,
            telefone: response.telefone,
            email: response.email,
            senha: response.senha, 
            dor: response.dor,
            doenca: response.doenca,
            cirurgico: response.cirurgico,
            esporte: response.esporte,
          })
        }
      })
    }
  }, [params.id])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 32 }}>ID: {params.id} </Text>

      <Text style={{ fontSize: 32 }}>Nome: {data.nome}</Text>

      <Text style={{ fontSize: 32 }}>Sobrenome: {data.SobreNome}</Text>

      <Text style={{ fontSize: 32 }}>Nascimento: {data.nascimento}</Text>

      <Text style={{ fontSize: 32 }}>Gênero: {data.genero}</Text>

      <Text style={{ fontSize: 32 }}>Cidade: {data.cidade}</Text>

      <Text style={{ fontSize: 32 }}>UF: {data.uf}</Text>

      <Text style={{ fontSize: 32 }}>Telefone: {data.telefone}</Text>

      <Text style={{ fontSize: 32 }}>Email: {data.email}</Text>

      <Text style={{ fontSize: 32 }}>Senha: {data.senha}</Text>

      <Text style={{ fontSize: 32 }}>Dores: {data.dor}</Text>

      <Text style={{ fontSize: 32 }}>Doenças: {data.doenca}</Text>
      
      <Text style={{ fontSize: 32 }}>Cirurgia: {data.cirurgico}</Text>

      <Text style={{ fontSize: 32 }}>Esporte: {data.esporte}</Text>
    </View>
  )
}
