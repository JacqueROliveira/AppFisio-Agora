import { Logo, Container1, Container2, Title, SubTitle, Container, Container3 } from './styles'
import { TouchableOpacityProps } from 'react-native';
import logo from 'assets/Logo.png'
import { useNavigation } from '@react-navigation/native';
import { useUser } from 'src/contexts/UserContext';
import type { RootStackParamList } from '@components/routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = TouchableOpacityProps & {
    title: string;
}

type GroupCardScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList, 
  'groupCard' 
>;

export function GroupCard() {

    const { user } = useUser();
    const navigation = useNavigation<GroupCardScreenNavigationProp>();

    function handleNewGroup() {
        navigation.navigate('groupPrivat');
    }
    function handleNewGroup2() {
        navigation.navigate('groupPublic');
    }
    function handleUpdateCadastro() {
        navigation.navigate('edicaoCadastro');
    }

    return (
        <>
            <Container>
                <Logo source={logo} />

                <SubTitle>
                    Escolha a modalidade:
                </SubTitle>
                <Container1 >
                    <Title
                        onPress={handleNewGroup}
                    >
                        Atendimento Particular
                    </Title>
                </Container1>

                <Container2 >
                    <Title
                        onPress={handleNewGroup2}
                    >
                        Atendimento Em Faculdade
                    </Title>
                </Container2>

                 <Container3 >
                    <Title
                        onPress={handleUpdateCadastro}
                    >
                        Editar meu cadastro
                    </Title>
                </Container3>

              
                
            </Container>
        </>
    );
}