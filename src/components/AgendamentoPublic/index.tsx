import {Container, SubTitle, TextSelecao, CadastroLogo,  FixaCadastro, Logo, RetornoDados} from './style'
import logoimg from 'assets/Logo-letra.png'
import { ButtonCadastro } from '@components/Button';
import ImputData from 'src/ImputData';



export function AgendamentoPublic(){
  return(
    <>
      <Container>
        <CadastroLogo>
          <TextSelecao>
            AGENDAMENTO
          </TextSelecao>
        </CadastroLogo>

        <RetornoDados/>

        <ImputData/>

        <ButtonCadastro
          title="CONCLUIR AGENDAMENTO"
          type='PRIMARY'
        />

        <Logo source={logoimg}/>
      </Container>
    </>
  );
}