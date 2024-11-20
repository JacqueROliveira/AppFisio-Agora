import {Container, SubTitle, TextSelecao, CadastroLogo,  FixaCadastro, Logo, RetornoDados, Container1, Title, Position, Preco, Value} from './style'
import logoimg from 'assets/Logo-letra.png'
import { ButtonCadastro } from '@components/Button';
import ImputDataPrivat from '@components/imputDataPrivat';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { useTheme} from 'styled-components/native'


export function AgendamentoPrivat(){

  const navigation = useNavigation();

    function handleConfirmacaoPrivat(){
        navigation.navigate('confirmacaoPrivat');
   }

   const {COLORS} = useTheme();

  return(
    <>
      <Container>
        <CadastroLogo>
          <TextSelecao>
            AGENDAMENTO
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

        <ImputDataPrivat/>

        <ButtonCadastro
          title="CONCLUIR AGENDAMENTO"
          type='SECONDARY'
          onPress={handleConfirmacaoPrivat}
        />

        <Logo source={logoimg}/>
      </Container>
    </>
  );
}