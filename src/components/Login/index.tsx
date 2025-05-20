import { Logo, Container, SubTitle } from '@components/Login/style'
import logoimg from 'assets/Logo-letra.png'
import { Button } from '@components/Button';
import { Input, Password } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { ClickHere, StyledText } from '@components/Button/styles';



export function Login() {

    const navigation = useNavigation();

    function handleNewGroup() {
        navigation.navigate('groupCard');
    }
    function handleCadastro() {
        navigation.navigate('cadastro');
    }
    return (
        <>
            <Container>
                <Logo source={logoimg} />

                <Input
                    placeholder='E-mail'
                    keyboardType='email-address'
                />
                <Password
                    placeholder='Senha'
                    secureTextEntry={true}
                />
                <Button
                    title="Entrar"
                    onPress={handleNewGroup}
                />

                <ClickHere
                    onPress={handleCadastro}
                >
                    <SubTitle>Caso ainda não possua um cadastro, <StyledText>Clique aqui!</StyledText> </SubTitle>
                </ClickHere>
            </Container>
        </>
    );
}