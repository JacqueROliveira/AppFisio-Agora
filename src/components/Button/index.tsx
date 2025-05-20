import { TouchableOpacityProps, View } from 'react-native'
import { ClickHere, StyledText, Container, Title, SubTitle } from './styles'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps
}


export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
    return (
        <>
            <Container
                type={type}
                {...rest}>
                <Title>
                    {title}
                </Title>
            </Container>
        </>
    );
}
/* este atributo foi feito para ser usado principalmente na tela do Login */
export function ButtonCadastro({ title, type = 'PRIMARY', ...rest }: Props) {
    return (

        <Container
            type={type}
            {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    );
}
export function ButtonVoltarPublic({ title, type = 'PRIMARY', ...rest }: Props) {
    return (

        <Container
            type={type}
            {...rest}>
            <Title>
                {title}
            </Title>
        </Container>

    );
}
export function ButtonVoltarPrivat({ title, type = 'SECONDARY', ...rest }: Props) {
    return (

        <Container
            type={type}
            {...rest}>
                <Title>
                    {title}
                </Title>
            </Container>
        );
}
export function ButtonSave({title, type= 'PRIMARY', ...rest}:Props ){
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