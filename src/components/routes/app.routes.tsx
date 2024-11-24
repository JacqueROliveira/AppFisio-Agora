import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Groups from '@screens/Groups';
import { Cadastro} from '@components/Cadastro';
import { GroupCard } from '@components/GroupCard';
import { GroupPrivat } from '@components/GroupPrivat';
import { GroupPublic } from '@components/GroupPublic';
import { ConfirmacaoPrivat } from '@components/ConfirmacaoPrivat';
import { ConfirmacaoPublic } from '@components/ConfirmacaoPublic';
import { AgendamentoPrivat } from '@components/AgendamentoPrivat';
import { AgendamentoPublic } from '@components/AgendamentoPublic';
<<<<<<< HEAD
import { DadosCadastrais } from '@components/DadosCadastrais';
=======

>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
            name="groups"
            component={Groups}
            />
            <Screen
            name="cadastro"
            component={Cadastro}
            />
             <Screen
            name="groupCard"
            component={GroupCard}
            />
             <Screen
            name="groupPrivat"
            component={GroupPrivat}
            />
             <Screen
            name="groupPublic"
            component={GroupPublic}
            />
             <Screen
            name="confirmacaoPrivat"
            component={ConfirmacaoPrivat}
            />
             <Screen
            name="confirmacaoPublic"
            component={ConfirmacaoPublic}
            />
             <Screen
            name="agendamentoPrivat"
            component={AgendamentoPrivat}
            />
             <Screen
            name="agendamentoPublic"
            component={AgendamentoPublic}
            />
<<<<<<< HEAD
             <Screen
            name="dadosCadastrais"
            component={DadosCadastrais}
            />
=======
>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108

        </Navigator>
    );
}

export default AppRoutes;