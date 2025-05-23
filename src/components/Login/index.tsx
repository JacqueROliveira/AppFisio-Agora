import { Logo, Container, SubTitle } from '@components/Login/style'
import logoimg from 'assets/Logo-letra.png'
import { Button } from '@components/Button';
import { Input, Password } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { ClickHere, StyledText } from '@components/Button/styles';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useCadastroDatabase, CadastroDatabase } from '@dataBase/useCadastroDatabase';

import { useUser } from '../../contexts/UserContext';

export function LoginScreen() {
    const navigation = useNavigation();
    const { login } = useUser();
    const { authUser } = useCadastroDatabase(); 
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

       function handleCadastro() {
        navigation.navigate('cadastro');
    }

    async function handleLogin() {
        if (!email.trim() || !senha.trim()) { 
            Alert.alert("Erro de Login", "Por favor, preencha seu e-mail e senha ou efetue seu cadastro.");
            return; 
        }
        try {
            
            const authenticatedUser = await authUser(email, senha);

            if (authenticatedUser) {
                
                login(authenticatedUser);
                Alert.alert("Login", "Login efetuado com sucesso!");
                navigation.navigate('groupCard'); 
            } else {
                Alert.alert("Login", "Email ou senha inválidos.");
            }
        } catch (error) {
            console.error("Erro ao tentar login:", error);
            Alert.alert("Erro", "Ocorreu um erro ao tentar logar. Tente novamente.");
        }
    } 
    return (
        <>
            <Container>
                <Logo source={logoimg} />

                <Input
                    placeholder='E-mail'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                />
                <Password
                    placeholder='Senha'
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={setSenha}
                />
                
                <Button
                    title='Entrar'
                    onPress={handleLogin}
              
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






