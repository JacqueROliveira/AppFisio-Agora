import { Container, Title, SubTitle, Position, TextSelecao, CadastroLogo, Preco, Value, Texto, DiaHorario, Logo } from './style'
import { useTheme } from 'styled-components/native'
import Svg, { Line } from 'react-native-svg';
import logo from 'assets/Logo.png'
import { ButtonVoltarPrivat } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { RouteProp, useRoute, NavigationProp } from '@react-navigation/native';


export function ConfirmacaoPrivat() {
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
        confirmacaoPrivat: {
            nome: string;
            endereco: string;
            preco: string;
            data: string;
            horario: string;
        };
    };
    type AgendamentoPrivatRouteProp = RouteProp<RootStackParamList, 'agendamentoPrivat'>;

    type NavigationProps = NavigationProp<RootStackParamList>;

    const route = useRoute<AgendamentoPrivatRouteProp>();

    // Extrair os parâmetros
    const { nome, endereco, preco, data, horario } = route.params;

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
                <Preco>
                    <Value>{preco}</Value>
                </Preco>
            </Position>
            <Svg height={30} width="100%">
                <Line
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke={COLORS.Azul}
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

            <Logo source={logo} />
            <ButtonVoltarPrivat
                title="Inicio"
                onPress={handleNewGroup}
            />
        </Container>

    );
}