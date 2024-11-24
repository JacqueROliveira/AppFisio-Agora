<<<<<<< HEAD
import {Logo, Container1, Container2, Icon, Title, SubTitle, Container, Container3, TitleCadastral} from './styles'
=======
import {Logo, Container1, Container2, Icon, Title, SubTitle, Container} from './styles'
>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import logoimg from 'assets/Logo-letra.png'
import { useNavigation } from '@react-navigation/native';


type Props = TouchableOpacityProps & {
     title: string;
}

export function GroupCard(){

    const navigation = useNavigation();

    function handleNewGroup(){
        navigation.navigate('groupPrivat');
   }
   function handleNewGroup2(){
    navigation.navigate('groupPublic');
    }

<<<<<<< HEAD
    function handleDadosCadastrais(){
        navigation.navigate('dadosCadastrais');
        }


=======
>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108
    return(
        <>
           <Container>
            <Logo source={logoimg}/>
            
            <SubTitle>
<<<<<<< HEAD
            Escolha a modalidade: 
=======
            Escolha a modalidade de Atendimento: 
>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108
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
           </Container>
        </>
    );
}