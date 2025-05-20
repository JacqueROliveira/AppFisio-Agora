
import {Container, TextSelecao, CadastroLogo, FixaCadastro, Logo} from './style'
import { useEffect, useState } from "react"

import { View, Button, Alert, FlatList, ScrollView } from "react-native"
import { router } from "expo-router"

import { Input } from "@components/Cadastro/Input"
import { Patient } from "@components/Cadastro/Patient"
import { ButtonCadastro, ButtonSave } from '@components/Button';

import {  useCadastroDatabase,  CadastroDatabase,} from "@dataBase/useCadastroDatabase"

import { Container, TextSelecao, CadastroLogo, FixaCadastro, Logo } from './style'
import { ScrollView } from 'react-native';
import logoimg from 'assets/Logo-letra.png'
import { ButtonCadastro } from '@components/Button';
import { useState } from 'react';
import { SobreNome } from '@components/Input/index'
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid'

export  function Index() {
  const [id, setId] = useState("")
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [nascimento, setNascimento] = useState("")
  const [genero, setGenero] = useState("")
  const [cidade, setCidade] = useState("")
  const [uf, setUf] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [dor, setDor] = useState("")
  const [doenca, setDoenca] = useState("")
  const [cirurgico, setCirurgico] = useState("")
  const [esporte, setEsporte] = useState("")
  const [search, setSearch] = useState("")
  const [patient, setPatient] = useState<CadastroDatabase[]>([])
  const cadastroDatabase = useCadastroDatabase()

          const navigation = useNavigation();
           async function handleGroupCard(){
            const id = uuid.v4();
             navigation.navigate('groupCard');
        }

  async function create() {
    try {
      if (isNaN(Number(senha))) {
        return Alert.alert("Senha", "A senha precisa ser um número!")
      }

      const response = await cadastroDatabase.create({
        nome,
        sobrenome,
        nascimento,
        genero, 
        cidade,
        uf,
        telefone,
        email,
        senha,
        dor,
        doenca, 
        cirurgico, 
        esporte,
      })

      Alert.alert("Cadastro efetuado com sucesso!")
    } catch (error) {
      console.log(error)
    }
  }

  async function update() {
    try {
      if (isNaN(Number(senha))) {
        return Alert.alert("Senha", "A senha precisa ser um número!")
      }

      const response = await cadastroDatabase.update({
        id: Number(id),
        nome,
        sobrenome,
        nascimento,
        genero, 
        cidade,
        uf,
        telefone,
        email,
        senha,
        dor,
        doenca, 
        cirurgico, 
        esporte,
      })

      Alert.alert("Paciente atualizado!")
    } catch (error) {
      console.log(error)
    }
  }

  async function list() {
    try {
      const response = await cadastroDatabase.searchByName(search)
      setPatient(response)
    } catch (error) {
      console.log(error)
    }
  }

  async function remove(id: number) {
    try {
      await cadastroDatabase.remove(id)
      await list()
    } catch (error) {
      console.log(error)
    }
  }

  function cadastro(item: CadastroDatabase) {
    setId(String(item.id))
    setNome(item.nome)
    setSobrenome(String(item.sobrenome))
    setNascimento(item.nascimento)
    setGenero(item.genero)
    setCidade(item.cidade)
    setUf(item.uf)
    setTelefone(item.telefone)
    setEmail(item.email)
    setSenha(item.senha)
    setDor(item.dor)
    setDoenca(item.doenca)
    setCirurgico(item.cirurgico)
    setEsporte(item.esporte)
  }

  async function handleSave() {
    if (id) {
      update()
    } else {
      create()
    }

    setId("")
    setNome("")
    setSobrenome("")
    setNascimento("")
    setGenero("")
    setCidade("")
    setUf("")
    setTelefone("")
    setEmail("")
    setSenha("")
    setDor("")
    setDoenca("")
    setCirurgico("")
    setEsporte("")
    await list()
  }

  useEffect(() => {
    list()
  }, [search])

  return (
    <><>
      <Container>

        <CadastroLogo>
                <TextSelecao>
                    CADASTRO
                </TextSelecao>
            </CadastroLogo>

        <FixaCadastro>
          <ScrollView>
            <Input placeholder="Nome" onChangeText={setNome} value={nome} />
            <Input placeholder="Sobrenome" onChangeText={setSobrenome} value={sobrenome} />
            <Input placeholder='Data de Nascimento Dia/Mês/Ano' onChangeText={setNascimento} value={nascimento} />
            <Input placeholder='Gênero:' onChangeText={setGenero} value={genero} />
            <Input placeholder='Cidade/UF:' onChangeText={setCidade} value={cidade} />
            <Input placeholder='Telefone (DDD) +' onChangeText={setTelefone} value={telefone} />
            <Input placeholder='E-mail' onChangeText={setEmail} value={email} />
            <Input placeholder='Senha' onChangeText={setSenha} value={senha} />
            <Input placeholder='Descreva sua dor' onChangeText={setDor} value={dor} />
            <Input placeholder='Histórico de Doenças' onChangeText={setDoenca} value={doenca} />
            <Input placeholder='Já fez alguma Cirurgia? se sim, qual?' onChangeText={setCirurgico} value={cirurgico} />
            <Input placeholder='Pratica algum esporte?' onChangeText={setEsporte} value={esporte} />

            <ButtonSave title="Salvar" onPress={handleSave} />            

            <ButtonCadastro title="Ir para agendamentos" onPress={handleGroupCard} />

          </ScrollView>
        </FixaCadastro>
         
      </Container>
    </></>
   
  )
}

