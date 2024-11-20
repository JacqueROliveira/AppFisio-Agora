import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { Container, Title, SubTitle, Position, TextSelecao, CadastroLogo, Preco, Value, Texto, DiaHorario, Logo} from './style'
import { useTheme} from 'styled-components/native'
import Svg, { Line } from 'react-native-svg';
import logoimg from 'assets/Logo-letra.png'
import { Button, ButtonVoltarPrivat } from '@components/Button';
import { useNavigation } from '@react-navigation/native';


export function ConfirmacaoPrivat(){
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
                    Vitória Ramos
                </Title>

                <SubTitle>
                    Av. Interlagos, 705 - Jardim Umuarama, São Paulo - SP
                </SubTitle>
                <Preco>
                    <Value id="value">R$110,00</Value>
                </Preco>
            </Position>
            <Svg height={30} width="100%">
                    <Line 
                        x1="0%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                    stroke={COLORS.STELLBLUE}
                    />
             </Svg>
            
            <Texto>
                Dia:
            </Texto>
            <DiaHorario>
                24/09/2024
            </DiaHorario>

            <Texto>
                HORÁRIO:
            </Texto>
            <DiaHorario>
                15:00 - 16:00
            </DiaHorario>

            <Logo source={logoimg}/>
            <ButtonVoltarPrivat 
                title="Inicio"
                onPress={handleNewGroup}
            />
       </Container>
       
    );
}