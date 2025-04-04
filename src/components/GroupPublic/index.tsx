import {
    TextSelecao,
    Privat,
    Texto,
    Container1,
    Container2,
    Container3,
    Title,
    SubTitle,
    Agendar,
} from './style'
import { PositionScreen } from './style';
import { ButtonVoltarPublic } from '@components/Button';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Definir tipos para navegação com parâmetros
type RootStackParamList = {
    groupCard: undefined;
    agendamentoPublic
    nome: string;
    endereco: string;
};

type NavigationProps = NavigationProp<RootStackParamList>;
export function GroupPublic() {

    const navigation = useNavigation<NavigationProps>();

    function handleNewGroup() {
        navigation.navigate('groupCard');
    }

    function handleAgendamento(nome: string, endereco: string) {
        navigation.navigate('agendamentoPublic', {
            nome,
            endereco,
        });
    }
    return (
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
                        <Texto
                            onPress={() => handleAgendamento(
                                'Universidade de São Paulo',
                                'Av, dos Bandeirantes, 4680 - Planalto Paulista, São Paulo - SP',
                            )}>Agendar</Texto>
                    </Agendar>
                </Container1>

                <Container2>
                    <Title>
                        Universidade de Minas Gerais
                    </Title>

                    <SubTitle>
                        Av. Carandaí, 840 - Funcionários, Belo Horizonte - MG
                    </SubTitle>
                    <Agendar>
                        <Texto
                            onPress={() => handleAgendamento(
                                'Universidade de Minas Gerais',
                                'Av. Carandaí, 840 - Funcionários, Belo Horizonte - MG',
                            )}
                        >Agendar</Texto>
                    </Agendar>
                </Container2>

                <Container3>
                    <Title>
                        Universidade do Paraná
                    </Title>

                    <SubTitle>
                        R. Augusto Stresser, 839 - Juvevê, Curitiba - PR
                    </SubTitle>
                    <Agendar>
                        <Texto
                            onPress={() => handleAgendamento(
                                'Universidade do Paraná',
                                'R. Augusto Stresser, 839 - Juvevê, Curitiba - PR',
                            )}
                        >Agendar</Texto>
                    </Agendar>
                </Container3>
                <ButtonVoltarPublic
                    title="Voltar"
                    onPress={handleNewGroup}
                />
            </PositionScreen>
        </>
    );
}