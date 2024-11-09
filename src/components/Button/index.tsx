import { TouchableOpacityProps, View} from 'react-native'
import { ClickHere, StyledText, Container, Title, SubTitle, ButtonTypeStyleProps } from './styles'
import { TouchableOpacity } from 'react-native';
type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps
}

export function Button({ title, type= 'PRIMARY', ...rest}:Props ){
    return(
        <>
        <Container 
        type={type}
        {...rest}>
            <Title>
                {title}
            </Title>
        </Container>

        
        <ClickHere>
        <SubTitle>Caso ainda não possua um cadastro, <StyledText>Clique aqui!</StyledText> </SubTitle>
        </ClickHere>
        </>
    );
}
/* este atributo foi feito para ser usado principalmente na tela do Login */
export function ButtonCadastro({title, type= 'PRIMARY', ...rest}:Props ){
    return(

    <Container 
        type={type}
        {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    );
}
export function ButtonVoltarPublic({title, type= 'PRIMARY',...rest}:Props ){
    return(
        
        <Container 
            type={type}
            {...rest}>
                <Title>
                    {title}
                </Title>
            </Container>
        
    );
}
    export function ButtonVoltarPrivat({title, type= 'SECONDARY',...rest}:Props ){
        return(
    
        <Container 
            type={type}
            {...rest}>
                <Title>
                    {title}
                </Title>
            </Container>
        );
}