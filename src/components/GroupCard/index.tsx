import {Logo, Container1, Container2, Icon, Title, SubTitle, Container} from './styles'
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

    return(
        <>
           <Container>
            <Logo source={logoimg}/>
            
            <SubTitle>
            Escolha a modalidade de Atendimento: 
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