import { Container, TextSelecao, CadastroLogo, FixaCadastro } from './style';
import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

import { Input } from "@components/Cadastro/Input";
import { ButtonCadastro, ButtonSave } from '@components/Button';
import { useCadastroDatabase } from "@dataBase/useCadastroDatabase"; 

export function Index() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [genero, setGenero] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dor, setDor] = useState("");
  const [doenca, setDoenca] = useState("");
  const [cirurgico, setCirurgico] = useState("");
  const [esporte, setEsporte] = useState("");

  const cadastroDatabase = useCadastroDatabase();
  const navigation = useNavigation();

  async function handleCreateUser() { 
    try {
      if (isNaN(Number(senha))) {
        return Alert.alert("Senha", "A senha precisa ser um número!");
      }
      if (!nome || !email || !senha) { 
          return Alert.alert('Atenção', 'Nome, e-mail e senha são obrigatórios!');
      }

      await cadastroDatabase.create({
        nome, sobrenome, nascimento, genero, cidade, uf,
        telefone, email, senha, dor, doenca, cirurgico, esporte,
      });

      Alert.alert("Sucesso!", "Cadastro efetuado com sucesso!");
      
      navigation.navigate('groupCard'); 
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível efetuar o cadastro. Tente novamente.");
    }
  }

  return (
    
      <><Container>

      <CadastroLogo>
        <TextSelecao>
          CADASTRO
        </TextSelecao>
      </CadastroLogo>

      <FixaCadastro>
        <ScrollView >
          <Input placeholder="Nome" onChangeText={setNome} value={nome} />
          <Input placeholder="Sobrenome" onChangeText={setSobrenome} value={sobrenome} />
          <Input placeholder='Data de Nascimento Dia/Mês/Ano' onChangeText={setNascimento} value={nascimento} keyboardType='numeric' />
          <Input placeholder='Gênero:' onChangeText={setGenero} value={genero} />
          <Input placeholder='Cidade:' onChangeText={setCidade} value={cidade} />
          <Input placeholder='UF:' onChangeText={setUf} value={uf} />
          <Input placeholder='Telefone (DDD) +' onChangeText={setTelefone} value={telefone} keyboardType='phone-pad'/>
          <Input placeholder='E-mail' onChangeText={setEmail} value={email} keyboardType='email-address' />
          <Input placeholder='Senha' onChangeText={setSenha} value={senha}  secureTextEntry/>
          <Input placeholder='Descreva sua dor' onChangeText={setDor} value={dor} />
          <Input placeholder='Histórico de Doenças' onChangeText={setDoenca} value={doenca} />
          <Input placeholder='Já fez alguma Cirurgia? se sim, qual?' onChangeText={setCirurgico} value={cirurgico} />
          <Input placeholder='Pratica algum esporte?' onChangeText={setEsporte} value={esporte} />

          <ButtonSave title="Salvar" onPress={handleCreateUser} />

        </ScrollView>
      </FixaCadastro>
    </Container>

   
        </>
  );
}

