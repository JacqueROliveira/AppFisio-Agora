import {Container, SubTitle, TextSelecao, CadastroLogo, FixaCadastro, Logo} from './style'
import CidadeUFInput from '@components/CidadeUfInput';
import PhoneInput from '@components/PhoneInput';
import EmailPasswordInputs from '@components/EmailPasswordInputs';
import TextAreaForm from '@components/TextAreaForm';
import { ScrollView } from 'react-native';
import logoimg from 'assets/Logo-letra.png'
import { ButtonCadastro } from '@components/Button';
import { useState } from 'react';
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
/* cada elemento posicionado representa um campo da tela, por exemplo: Nome, Sobrenome etc, alterar a 
ordem dos elementos aqui, alterará na tela também
*/ 

export function Cadastro(){

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
                    
                    />
                </ScrollView>
            </FixaCadastro>
                    <Logo source={logoimg}/>
        </Container>

        </>
    );
  }