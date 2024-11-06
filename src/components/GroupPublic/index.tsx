import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import {TextSelecao, Privat, Value, Texto, Container1, Container2, Container3, Title, SubTitle, Agendar, Preco, Position} from './style'
import { Text } from 'react-native';
import { PositionScreen } from './style';
type Props = {
    
    title: string;
}
export function GroupPublic(){
    return(
        <>

            <PositionScreen>

            <Privat>
                <TextSelecao>
                    Atendimento Em Faculdade   
                </TextSelecao>    
            </Privat>
            <Container1>
                <Title>
                    Universidade de São Paulo
                </Title>

                <SubTitle>
                    Av, dos Bandeirantes, 4680 - Planalto Paulista, São Paulo - SP
                </SubTitle>
                    <Agendar>
                        <Texto>Agendar</Texto>
                    </Agendar>
            </Container1>

            <Container2>
            <Title>
                    Universidade de São Paulo
                </Title>

                <SubTitle>
                    Av, dos Bandeirantes, 4680 - Planalto Paulista, São Paulo - SP
                </SubTitle>
                    <Agendar>
                        <Texto>Agendar</Texto>
                    </Agendar>
            </Container2>

            <Container3>
            <Title>
                    Universidade de São Paulo
                </Title>

                <SubTitle>
                    Av, dos Bandeirantes, 4680 - Planalto Paulista, São Paulo - SP
                </SubTitle>
                    <Agendar>
                        <Texto>Agendar</Texto>
                    </Agendar>
            </Container3>
            </PositionScreen>

        </>
    );
}