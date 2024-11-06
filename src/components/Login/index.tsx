import{Content, Logo, Container, Texto, SubTitle, ImputLogin, ClicHere } from '@components/Login/style'
import { TextInput, TouchableOpacity } from 'react-native'
import logoimg from 'assets/Logo-letra.png'
import styled from 'styled-components';
import { Button } from '@components/Button';
import { Input, Password } from '@components/Input';
import { useNavigation } from '@react-navigation/native';



export function Login(){

    const navigation = useNavigation();

    function handleNewGroup(){
        navigation.navigate('groupCard');
   }
    return(
        <>
        <Container>
            <Logo source={logoimg}/>

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
        </Container>
        </>
    );
}