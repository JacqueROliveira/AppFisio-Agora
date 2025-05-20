import {Container, SubTitle, TextSelecao, CadastroLogo, FixaCadastro, Logo} from './style'
import logoimg from 'assets/Logo-letra.png'
import { useState} from 'react';
import {FlatList,} from 'react-native'
import { useNavigation} from '@react-navigation/native';
import { ButtonVoltarPublic } from '@components/Button';
import { cadastroGetAll } from '@storage/cadastro/cadastroGetAll';

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