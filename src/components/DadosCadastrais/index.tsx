import {Container, SubTitle, TextSelecao, CadastroLogo, FixaCadastro, Logo} from './style'
import CidadeUFInput from '@components/CidadeUfInput';
import PhoneInput from '@components/PhoneInput';
import EmailPasswordInputs from '@components/EmailPasswordInputs';
import { ScrollView } from 'react-native';
import logoimg from 'assets/Logo-letra.png'
import { ButtonCadastro } from '@components/Button';
import { useState, useCallback } from 'react';
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
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { AlignLeft } from 'phosphor-react-native';

import {SobreNome} from '@components/Input/index'
import { DatePickerDemo } from '@components/DateTime';
import { GenderSelect } from '@components/GenderSelect';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Input } from '@components/Input/index';
import { string } from 'yup';
import { cadastroCreate } from '@storage/cadastro/cadastroCreate';
import { 
  TextInput, 
  KeyboardAvoidingView,
} from 'react-native';
import { ButtonVoltarPublic } from '@components/Button';
import { cadastroGetAll } from '@storage/cadastro/cadastroGetAll';
import { useEffect } from 'react';
/* cada elemento posicionado representa um campo da tela, por exemplo: Nome, Sobrenome etc, alterar a 
ordem dos elementos aqui, alterará na tela também
*/ 

export function DadosCadastrais(){
    const [cadastro, setCadastro] = useState<string[]>([]);

        const navigation = useNavigation();

        function handleGroupCard(){
            navigation.navigate('groupCard');
            }


        async function fetchCadastros(){
            try {
                const data = await cadastroGetAll();
                setCadastro(data)
            } catch (error) {
                console.log(error);
            }
        }

      

    return(
        <>
        <Container>
            <CadastroLogo>
                <TextSelecao>
                    MEUS DADOS CADASTRAIS
                </TextSelecao>
            </CadastroLogo>

                <FlatList
                data={cadastro}
                keyExtractor={item => item}
                renderItem={({ item}) => (

                <FixaCadastro>
                    {item}
                </FixaCadastro>

                )}
                />
            <ButtonVoltarPublic 
            title="Confirmar"
            type='PRIMARY'
            onPress={handleGroupCard}
            />

            <Logo source={logoimg}/>
        </Container>

        </>
    );
}