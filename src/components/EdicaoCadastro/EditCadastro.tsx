import { Container, TextSelecao, CadastroLogo, FixaCadastro } from './style'; 

import React, { Component, useEffect, useState } from 'react'; 
import { Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

import { Input } from '@components/Cadastro/Input';
import { ButtonSave, ButtonCadastro } from '@components/Button';
import { useCadastroDatabase } from '@dataBase/useCadastroDatabase'; 
import { UserData, useUser } from 'src/contexts/UserContext'; 
import { RootStackParamList } from '@components/routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginScreen } from '@components/Login';


type EditCadastrosScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'edicaoCadastro'
>;

export function EditCadastros() {
  const { user, updateUser, logout } = useUser(); 
  const { update, remove } = useCadastroDatabase(); 
  const navigation = useNavigation<EditCadastrosScreenNavigationProp>();

  
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(''); 
  const [dor, setDor] = useState('');
  const [doenca, setDoenca] = useState('');
  const [cirurgico, setCirurgico] = useState('');
  const [esporte, setEsporte] = useState('');


  useEffect(() => {
    if (user) {
      setId(String(user.id || ''));
      setNome(user.nome || '');
      setSobrenome(user.sobrenome || '');
      setNascimento(user.nascimento || '');
      setGenero(user.genero || '');
      setCidade(user.cidade || '');
      setUf(user.uf || '');
      setTelefone(user.telefone || '');
      setEmail(user.email || '');
      setSenha(user.senha || ''); 
      setDor(user.dor || '');
      setDoenca(user.doenca || '');
      setCirurgico(user.cirurgico || '');
      setEsporte(user.esporte || '');
    }
  }, [user]); 

  
  async function handleUpdateCadastro() { 
    try {
      
            const trimmedNome = nome.trim();
      const trimmedSobrenome = sobrenome.trim();
      const trimmedNascimento = nascimento.trim();
      const trimmedGenero = genero.trim();
      const trimmedCidade = cidade.trim();
      const trimmedUf = uf.trim();
      const trimmedTelefone = telefone.trim();
      const trimmedEmail = email.trim();
      const trimmedSenha = senha.trim();
      const trimmedDor = dor.trim();
      const trimmedDoenca = doenca.trim();
      const trimmedCirurgico = cirurgico.trim();
      const trimmedEsporte = esporte.trim();

      if (isNaN(Number(senha))) {
        return Alert.alert('Senha', 'A senha precisa ser um número!');
      }

            
if (!trimmedNome || !trimmedEmail || !trimmedSenha || !trimmedSobrenome || !trimmedNascimento || !trimmedGenero || !trimmedCidade || !trimmedUf || !trimmedTelefone || !trimmedDor || !trimmedDoenca || !trimmedCirurgico || !trimmedEsporte ) {
        return Alert.alert('Atualização', 'Por favor preencha todos os campos!.');
      }

      const updatedFields: UserData = {
        id: Number(id), 
        nome: trimmedNome,
        sobrenome: trimmedSobrenome,
        nascimento: trimmedNascimento,
        genero: trimmedGenero,
        cidade: trimmedCidade,
        uf: trimmedUf,
        telefone: trimmedTelefone,
        email: trimmedEmail,
        senha: trimmedSenha, 
        dor: trimmedDor,
        doenca: trimmedDoenca,
        cirurgico: trimmedCirurgico,
        esporte: trimmedEsporte,
      };

      
      await update(updatedFields);      
      updateUser(updatedFields); 

      Alert.alert('Sucesso!', 'Seu perfil foi atualizado!');
      navigation.navigate('groupCard'); 
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao atualizar', 'Não foi possível atualizar o perfil. Tente novamente.');
    }
  }

   async function handleDeleteCadastro() {
    Alert.alert(
      'Excluir Perfil',
      'Tem certeza que deseja excluir seu perfil? Esta ação não pode ser desfeita.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
            text: 'Excluir',
          onPress: async () => {
            try {
              if (!user || !user.id) {
                return Alert.alert('Erro', 'ID do usuário não encontrado para exclusão.');
              }
              await remove(Number(user.id)); 
              logout(); 
              Alert.alert('Sucesso!', 'Seu perfil foi excluído com sucesso.');
              navigation.navigate('login');  
            } catch (error) {
              console.log(error);
              Alert.alert('Erro ao excluir', 'Não foi possível excluir o perfil. Tente novamente.');
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  }

  return (
    <Container>
      <CadastroLogo>
        <TextSelecao>MEU PERFIL</TextSelecao>
      </CadastroLogo>

      <FixaCadastro>
        <ScrollView>
        
          <Input placeholder="Nome" onChangeText={setNome} value={nome} />
          <Input placeholder="Sobrenome" onChangeText={setSobrenome} value={sobrenome} />
          <Input placeholder='Data de Nascimento Dia/Mês/Ano' onChangeText={setNascimento} value={nascimento} keyboardType='numeric' />
          <Input placeholder='Gênero:' onChangeText={setGenero} value={genero} />
          <Input placeholder='Cidade:' onChangeText={setCidade} value={cidade} />
          <Input placeholder='UF:' onChangeText={setUf} value={cidade} />
          <Input placeholder='Telefone (DDD) +' onChangeText={setTelefone} value={telefone} keyboardType='phone-pad'/>
          <Input placeholder='E-mail' onChangeText={setEmail} value={email} keyboardType='email-address' />
          <Input placeholder='Senha' onChangeText={setSenha} value={senha}  secureTextEntry/>
          <Input placeholder='Descreva sua dor' onChangeText={setDor} value={dor} />
          <Input placeholder='Histórico de Doenças' onChangeText={setDoenca} value={doenca} />
          <Input placeholder='Já fez alguma Cirurgia? se sim, qual?' onChangeText={setCirurgico} value={cirurgico} />
          <Input placeholder='Pratica algum esporte?' onChangeText={setEsporte} value={esporte} />
         
          
          <ButtonSave title="Salvar Alterações" onPress={handleUpdateCadastro} />

          <ButtonCadastro title="Excluir Perfil" onPress={handleDeleteCadastro} />
        
          <ButtonCadastro title="Ir para agendamentos" onPress={() => navigation.navigate('groupCard')} /> 
 
        </ScrollView>
      </FixaCadastro>
    </Container>
  );
}