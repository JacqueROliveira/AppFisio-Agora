import {Container, SubTitle, TextSelecao, CadastroLogo,  FixaCadastro, Logo, RetornoDados} from './style'
import logoimg from 'assets/Logo-letra.png'
import { ButtonCadastro } from '@components/Button';
import ImputDataPrivat from '@components/imputDataPrivat';



export function AgendamentoPrivat(){
  return(
    <>
      <Container>
        <CadastroLogo>
          <TextSelecao>
            AGENDAMENTO
          </TextSelecao>
        </CadastroLogo>

        <RetornoDados/>

        <ImputDataPrivat/>

        <ButtonCadastro
          title="CONCLUIR AGENDAMENTO"
          type='SECONDARY'
        />

        <Logo source={logoimg}/>
      </Container>
    </>
  );
}