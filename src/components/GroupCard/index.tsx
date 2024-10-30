import {Logo, Container1, Container2, Icon, Title, SubTitle, Container} from './styles'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import logoimg from 'assets/Logo-letra.png'
type Props = TouchableOpacityProps & {
     
}

export function GroupCard(){
    return(
        <>
           <Container>
                <Logo source={logoimg}/>
            
            <SubTitle>
            Escolha a modalidade de Atendimento: 
            </SubTitle>
            <Container1 >
                <Title>
               Atendimento Particular
                </Title>
            </Container1>

            <Container2 >
                <Title>
               Atendimento Em Faculdade
                </Title>
            </Container2>
           </Container>
        </>
    );
}