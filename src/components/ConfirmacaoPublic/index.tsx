import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { Container, Title, SubTitle, Position, TextSelecao, CadastroLogo, Preco, Value, Texto, DiaHorario, Logo} from './style'
import { useTheme} from 'styled-components/native'
import Svg, { Line } from 'react-native-svg';
import logoimg from 'assets/Logo-letra.png'
import { ButtonVoltarPublic } from '@components/Button';
import { useNavigation } from '@react-navigation/native';


export function ConfirmacaoPublic(){
    const {COLORS} = useTheme();

    const navigation = useNavigation();

    function handleNewGroup(){
        navigation.navigate('groups'); 
   }

    return(
       <Container>
            <CadastroLogo>
                <TextSelecao>
                    AGENDAMENTO CONCLUIDO!
                </TextSelecao>
            </CadastroLogo>

            <Position>       
          
                <Title>
                    Universidade do Paraná
                </Title>

                <SubTitle>
                   R. Augusto Stresser, 839 - Juvevê, Curitiba - PR
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
                23/09/2024
            </DiaHorario>

            <Texto>
                HORÁRIO:
            </Texto>
            <DiaHorario>
                20:00 - 21:00
            </DiaHorario>

            <Logo source={logoimg}/>
            <ButtonVoltarPublic 
                title="Inicio"
                type='PRIMARY'
                onPress={handleNewGroup}
            />
       </Container>
       
    );
}