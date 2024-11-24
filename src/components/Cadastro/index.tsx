<<<<<<< HEAD
import {Container, TextSelecao, CadastroLogo, FixaCadastro, Logo} from './style'
=======
import {Container, SubTitle, TextSelecao, CadastroLogo, FixaCadastro, Logo} from './style'
import CidadeUFInput from '@components/CidadeUfInput';
import PhoneInput from '@components/PhoneInput';
import EmailPasswordInputs from '@components/EmailPasswordInputs';
import TextAreaForm from '@components/TextAreaForm';
>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108
import { ScrollView } from 'react-native';
import logoimg from 'assets/Logo-letra.png'
import { ButtonCadastro } from '@components/Button';
import { useState } from 'react';
<<<<<<< HEAD
import {SobreNome} from '@components/Input/index'
import { useNavigation } from '@react-navigation/native';
import { Input } from '@components/Input/index';
import { cadastroCreate } from '@storage/cadastro/cadastroCreate';
import uuid from 'react-native-uuid'

=======
import { useCadastroDatabase } from 'src/dataBase/useCadastroDatabase'
import { useTheme} from 'styled-components/native'
import { TextInputProps,  Modal, FlatList,} from 'react-native'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AlignLeft } from 'phosphor-react-native';

import {SobreNome, Nome} from '@components/Input/index'
import { DatePickerDemo } from '@components/DateTime';
import { GenderSelect } from '@components/GenderSelect';
>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108
/* cada elemento posicionado representa um campo da tela, por exemplo: Nome, Sobrenome etc, alterar a 
ordem dos elementos aqui, alterará na tela também
*/ 

export function Cadastro(){

<<<<<<< HEAD
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
=======
    const [id, setId] = useState();
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [nascimento, setNascimento] = useState();
    const [genero, setGenero] = useState();
    const [cidade, setCidade] = useState();
    const [uf, setUf] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [dor, setDor] = useState();
    const [doenca, setDoenca] = useState();
    const [cirurgico, setCirurgico] = useState();
    const [esporte, setEsporte] = useState();

    {/*const cadastroDatabase = useCadastroDatabase()

    async function create(){
        try {
            const response = await cadastroDatabase.create({nome: String(nome), sobrenome: String(sobrenome), nascimento: String(nascimento), genero: String(genero), cidade: String(cidade), uf: String(uf), telefone: Number(telefone), email: String(email), senha: String(senha), dor: String(dor), doenca: String(doenca), cirurgico: String(doenca), esporte: String(esporte)})
            
        } catch (error) {
            console.log(error)
        }
    }
  */}

>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108

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
<<<<<<< HEAD
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
=======
                    <Nome
                    placeholder='Nome'
                    
                    />
                    <SobreNome
                    placeholder='Sobrenome'
                    />
                    <DatePickerDemo/>
                    <GenderSelect/>
                    <CidadeUFInput/>
                    <PhoneInput/>
                    <EmailPasswordInputs/>
                    <TextAreaForm/>
                    <ButtonCadastro
                    title="CONCLUIR CADASTRO"
                    
>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108
                    />
                </ScrollView>
            </FixaCadastro>
                    <Logo source={logoimg}/>
        </Container>

        </>
    );
<<<<<<< HEAD
  }
=======
  }
>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108
