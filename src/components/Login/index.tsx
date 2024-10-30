import{Content, Logo, Container, Texto, SubTitle, ImputLogin, ClicHere } from '@components/Login/style'
import { TextInput, TouchableOpacity } from 'react-native'
import logoimg from 'assets/Logo-letra.png'
import styled from 'styled-components';
import { Button } from '@components/Button';
import { Input, Password } from '@components/Input';
export function Login(){
    return(

        <>
        

        <Container>
            <Logo source={logoimg}/>

            {/*<Content>
                
            </Content>*/}
            <Input
            placeholder='Login'
            />
            <Password
            placeholder='Senha'
            />
            <Button 
                title="Entrar"
            />
        </Container>
        </>
    );
}