import {Container, SubTitle, TextSelecao, CadastroLogo, FixaCadastro, Logo} from './style'
import { Data, Nome, SobreNome } from '@components/Input';
import {DadosInputText, Position} from '@components/Input/styles'
import { TextInput } from 'react-native';
import DatePickerDemo from '@components/DateTime';
import GenderSelect from '@components/GenderSelect';
import CidadeUFInput from '@components/CidadeUfInput';
import PhoneInput from '@components/PhoneInput';
import EmailPasswordInputs from '@components/EmailPasswordInputs';
import TextAreaForm from '@components/TextAreaForm';
import { ScrollView } from 'react-native';
import logoimg from 'assets/Logo-letra.png'
import { ButtonCadastro } from '@components/Button';

/* cada elemento posicionado representa um campo da tela, por exemplo: Nome, Sobrenome etc, alterar a 
ordem dos elementos aqui, alterará na tela também
*/ 

export function Cadastro(){
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