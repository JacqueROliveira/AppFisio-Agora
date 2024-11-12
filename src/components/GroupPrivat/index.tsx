import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import {TextSelecao, Privat, Value, Texto, Container1, Container2, Container3, Title, SubTitle, Agendar, Preco, Position} from './style'
import { Text } from 'react-native';
import { PositionScreen } from './style';
import { Button, ButtonVoltarPrivat } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
type Props = {
    
    title: string;
}
export function GroupPrivat(){

    const navigation = useNavigation();

    function handleNewGroup(){
        navigation.navigate('groupCard');
   }
   function handleAgendPrivat(){
        navigation.navigate('agendamentoPrivat')
   }
    return(
        <>

            <PositionScreen>

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
                        <Texto
                         onPress={handleAgendPrivat}
                        >Agendar</Texto>
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
                    <Texto
                     onPress={handleAgendPrivat}
                    >Agendar</Texto>
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
                    <Texto
                    onPress={handleAgendPrivat}
                    >Agendar</Texto>
                </Agendar>
                </Position>
            </Container3>
            <ButtonVoltarPrivat 
                title="Voltar"
                onPress={handleNewGroup}
            />
            </PositionScreen>

        </>
    );
}