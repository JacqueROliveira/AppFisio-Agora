import { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { useLocalSearchParams } from "expo-router"

import { useCadastroDatabase } from "@dataBase/useCadastroDatabase"
import { SobreNome } from "@components/Input"

export default function Cadastro() {
  const [data, setData] = useState({
    nome: "",
    SobreNome: "",
    senha: "",
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
           senha: response.senha,
          })
        }
      })
    }
  }, [params.id])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 32 }}>ID: {params.id} </Text>

      <Text style={{ fontSize: 32 }}>Senha: {data.senha}</Text>

      <Text style={{ fontSize: 32 }}>Nome: {data.nome}</Text>

      <Text style={{ fontSize: 32 }}>SobreNome: {data.SobreNome}</Text>
    </View>
  )
}
