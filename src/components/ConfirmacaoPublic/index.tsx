import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { Container, Title, SubTitle, Position, TextSelecao, CadastroLogo, Preco, Value, Texto, DiaHorario, Logo } from './style'
import { useTheme } from 'styled-components/native'
import Svg, { Line } from 'react-native-svg';
import logoimg from 'assets/Logo-letra.png'
import { ButtonVoltarPublic } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { RouteProp, useRoute, NavigationProp } from '@react-navigation/native';

export function ConfirmacaoPublic() {
    const { COLORS } = useTheme();

    const navigation = useNavigation();

    function handleNewGroup() {
        navigation.navigate('groups');
    }

    type RootStackParamList = {
        agendamentoPrivat: {
            nome: string;
            endereco: string;
            preco: string;
            data: string;
            horario: string;
        },
        agendamentoPublic: {
            nome: string;
            endereco: string;
            preco: string;
            data: string;
            horario: string;
        };
    };
    type AgendamentoPrivatRouteProp = RouteProp<RootStackParamList, 'agendamentoPublic'>;

    type NavigationProps = NavigationProp<RootStackParamList>;

    const route = useRoute<AgendamentoPrivatRouteProp>();

    // Extrair os parâmetros
    const { nome, endereco, data, horario } = route.params;
    return (
        <Container>
            <CadastroLogo>
                <TextSelecao>
                    AGENDAMENTO CONCLUIDO!
                </TextSelecao>
            </CadastroLogo>

            <Position>

                <Title>
                    {nome}
                </Title>

                <SubTitle>
                    {endereco}
                </SubTitle>
            </Position>
            <Svg height={30} width="100%">
                <Line
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke={COLORS.GREEN_500}
                />
            </Svg>

            <Texto>
                Dia:
            </Texto>
            <DiaHorario>
                {data}
            </DiaHorario>

            <Texto>
                HORÁRIO:
            </Texto>
            <DiaHorario>
                {horario}
            </DiaHorario>

            <Logo source={logoimg} />
            <ButtonVoltarPublic
                title="Inicio"
                type='PRIMARY'
                onPress={handleNewGroup}
            />
        </Container>

    );
}