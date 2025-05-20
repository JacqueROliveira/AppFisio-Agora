import {
    TextSelecao, 
    Privat, 
    Value, 
    Texto, 
    Container1, 
    Container2, 
    Container3, 
    Title, 
    SubTitle, 
    Agendar, 
    Preco, 
    Position
} from './style'
import { PositionScreen } from './style';
import { ButtonVoltarPrivat } from '@components/Button';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Definir tipos para navegação com parâmetros
type RootStackParamList = {
    groupCard: undefined;
    agendamentoPrivat: {
        nome: string;
        endereco: string;
        preco: string;
    };
};

type NavigationProps = NavigationProp<RootStackParamList>;

export function GroupPrivat() {
    const navigation = useNavigation<NavigationProps>();

    function handleNewGroup() {
        navigation.navigate('groupCard'); 
    }

    function handleAgendamento(nome: string, endereco: string, preco: string) {
        navigation.navigate('agendamentoPrivat', {
            nome,
            endereco,
            preco
        });
    }

    return (
        <PositionScreen>
            <Privat>
                <TextSelecao>
                    Atendimento Particular  
                </TextSelecao>    
            </Privat>

            <Container1>
                <Title>Vitória Ramos</Title>
                <SubTitle>Av. Interlagos, 705 - Jardim Umuarama, São Paulo - SP</SubTitle>
                <Position>
                    <Preco>
                        <Value>R$110,00</Value>
                    </Preco>
                    <Agendar>
                        <Texto
                            onPress={() => handleAgendamento(
                                'Vitória Ramos', 
                                'Av. Interlagos, 705 - Jardim Umuarama, São Paulo - SP', 
                                'R$110,00'
                            )}
                        >
                            Agendar
                        </Texto>
                    </Agendar>
                </Position>
            </Container1>

            <Container2>
                <Title>Eduardo Ramos Oliveira</Title>
                <SubTitle>R. Marcílio dias, 1222 - Centro, Pelotas - RS</SubTitle>
                <Position>
                    <Preco>
                        <Value>R$90,00</Value>
                    </Preco>
                    <Agendar>
                        <Texto
                            onPress={() => handleAgendamento(
                                'Eduardo Ramos Oliveira', 
                                'R. Marcílio dias, 1222 - Centro, Pelotas - RS', 
                                'R$90,00'
                            )}
                        >
                            Agendar
                        </Texto>
                    </Agendar>
                </Position>
            </Container2>

            <Container3>
                <Title>Simone Gutierrez</Title>
                <SubTitle>R. José de Alencar, 383 - centro, Campinas - SP</SubTitle>
                <Position>
                    <Preco>
                        <Value>R$110,00</Value>
                    </Preco>
                    <Agendar>
                        <Texto
                            onPress={() => handleAgendamento(
                                'Simone Gutierrez', 
                                'R. José de Alencar, 383 - centro, Campinas - SP', 
                                'R$110,00'
                            )}
                        >
                            Agendar
                        </Texto>
                    </Agendar>
                </Position>
            </Container3>

            <ButtonVoltarPrivat 
                title="Voltar"
                onPress={handleNewGroup}
            />
        </PositionScreen>
    );
}