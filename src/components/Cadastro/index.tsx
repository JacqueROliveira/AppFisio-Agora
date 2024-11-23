import {Container, TextSelecao, CadastroLogo, FixaCadastro, Logo} from './style'
import { ScrollView } from 'react-native';
import logoimg from 'assets/Logo-letra.png'
import { ButtonCadastro } from '@components/Button';
import { useState } from 'react';
import {SobreNome} from '@components/Input/index'
import { useNavigation } from '@react-navigation/native';
import { Input } from '@components/Input/index';
import { cadastroCreate } from '@storage/cadastro/cadastroCreate';
import uuid from 'react-native-uuid'

/* cada elemento posicionado representa um campo da tela, por exemplo: Nome, Sobrenome etc, alterar a 
ordem dos elementos aqui, alterará na tela também
*/ 

export function Cadastro(){

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('');
    const [nascimento, setNascimento] = useState('');;
    const [genero, setGenero] = useState('');
    const [cidade, setCidade] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dor, setDor] = useState('');
    const [doenca, setDoenca] = useState('');
    const [cirurgico, setCirurgico] = useState('');
    const [esporte, setEsporte] = useState('');



        const navigation = useNavigation();

        async function handleGroupCard(){
            const id = uuid.v4();
            
            const data ={
                id, nome, sobrenome, nascimento, genero, cidade, telefone, email, senha, dor, doenca, cirurgico, esporte
            }
            
            await cadastroCreate(id, nome, sobrenome, nascimento, genero, cidade, telefone, email, senha, dor, doenca, cirurgico, esporte);
            
            console.log(data)
            navigation.navigate('groupCard');
        }

    return(
        <>
        <Container>
            <CadastroLogo>
                <TextSelecao>
                    CADASTRO
                </TextSelecao>
            </CadastroLogo>

            <FixaCadastro>
                <ScrollView>
                    <Input
                    placeholder='Nome'
                    onChangeText={setNome}
                    />
                    <SobreNome
                    placeholder='Sobrenome'
                    onChangeText={setSobrenome}
                    />
                    <Input
                    placeholder='Data de Nascimento Dia/Mês/Ano'
                    onChangeText={setNascimento}
                    />
                     <Input
                    placeholder='Gênero: '
                    onChangeText={setGenero}
                    />
                    <Input
                    placeholder='Cidade/UF: '
                    onChangeText={setCidade}
                    />
                     <Input
                    placeholder='Telefone (DDD) +  '
                    onChangeText={setTelefone}
                    />
                    <Input
                    placeholder='E-mail'
                    onChangeText={setEmail}
                    />
                    <Input
                    placeholder='Senha'
                    onChangeText={setSenha}
                    />
                     <Input
                    placeholder='Descreva sua dor'
                    onChangeText={setDor}
                    />
                     <Input
                    placeholder='Histórico de Doenças'
                    onChangeText={setDoenca}
                    />
                     <Input
                    placeholder='Já fez alguma Cirurgia? se sim, qual?'
                    onChangeText={setCirurgico}
                    />
                     <Input
                    placeholder='Pratica algum esporte?'
                    onChangeText={setEsporte}
                    />
                    
                    <ButtonCadastro
                    title="CONCLUIR CADASTRO"
                    onPress={handleGroupCard}
                    />
                </ScrollView>
            </FixaCadastro>
                    <Logo source={logoimg}/>
        </Container>

        </>
    );
  }
