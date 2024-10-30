import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import {TextSelecao, Privat, Value, Texto, Container1, Container2, Container3, Title, SubTitle, Agendar, Preco, Position} from './style'
import { Text } from 'react-native';
type Props = {
    
    title: string;
}
export function GroupPrivat(){
    return(
        <>
            <Privat>
                <TextSelecao>
                    Atendimento Particular    
                </TextSelecao>    
            </Privat>
            <Container1>
                <Title>
                    Vitória Ramos
                </Title>

                <SubTitle>
                Av. Interlagos, 705 - Jardim Umuarama, São Paulo - SP
                </SubTitle>

                <Position>
                    
                    <Preco>
                        <Value>R$110,00</Value>
                    </Preco>

                    <Agendar>
                        <Texto>Agendar</Texto>
                    </Agendar>
                </Position>

            </Container1>

            <Container2>
            <Title>
                Eduardo Ramos Oliveira
            </Title>

            <SubTitle>
                R. Marcílio dias, 1222 - Centro, Pelotas - RS
            </SubTitle>

            <Position>
                    
                <Preco>
                    <Value>R$90,00</Value>
                </Preco>

                <Agendar>
                    <Texto>Agendar</Texto>
                </Agendar>
            </Position>
            </Container2>

            <Container3>
            <Title>
                Simone Gutierrez
            </Title>

            <SubTitle>
                R. José de Alencar, 383 - centro, Campinas - SP
            </SubTitle>

            <Position>
                    
                <Preco>
                    <Value>R$110,00</Value>
                </Preco>

                <Agendar>
                    <Texto>Agendar</Texto>
                </Agendar>
                </Position>
            </Container3>
        </>
    );
}