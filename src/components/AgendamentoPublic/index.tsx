import {Container, SubTitle, TextSelecao, CadastroLogo,  FixaCadastro, Logo, RetornoDados, Container1, Title, Position, Preco, Value} from './style'
import logoimg from 'assets/Logo-letra.png'
import { ButtonCadastro } from '@components/Button';
import ImputDataPublic from '@components/imputDataPublic';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { useTheme} from 'styled-components/native'


export function AgendamentoPublic(){

  const navigation = useNavigation();

    function handleConfirmacaoPublic(){
        navigation.navigate('confirmacaoPublic');
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

        <ImputDataPublic/>

        <ButtonCadastro
          title="CONCLUIR AGENDAMENTO"
          type='PRIMARY'
          onPress={handleConfirmacaoPublic}
        />

        <Logo source={logoimg}/>
      </Container>
    </>
  );
}