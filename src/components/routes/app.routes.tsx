import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Groups from '@screens/Groups';
import { Index } from '@components/Cadastro/index';
import { GroupCard } from '@components/GroupCard';
import { GroupPrivat } from '@components/GroupPrivat';
import { GroupPublic } from '@components/GroupPublic';
import { ConfirmacaoPrivat } from '@components/ConfirmacaoPrivat';
import { ConfirmacaoPublic } from '@components/ConfirmacaoPublic';
import { AgendamentoPrivat } from '@components/AgendamentoPrivat';
import { AgendamentoPublic } from '@components/AgendamentoPublic';
import { EditCadastros } from '@components/EdicaoCadastro/EditCadastro';
import { LoginScreen } from '@components/Login';

export type RootStackParamList = {
    login: undefined;
    cadastro: undefined;
    groups: undefined;
    edicaoCadastro: undefined; 
    groupCard: undefined;
    groupPrivat: undefined;
    groupPublic: undefined;
    confirmacaoPrivat: undefined;
    confirmacaoPublic: undefined;
    agendamentoPrivat: undefined;
    agendamentoPublic: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        
            
        <Navigator screenOptions={{ headerShown: false}}>
            
            <Screen
            name="login"
            component={LoginScreen}
            />
            <Screen
            name="cadastro"
            component={Index}
            />
            <Screen
            name="groups"
            component={Groups}
            />
              <Screen
            name="edicaoCadastro"
            component={EditCadastros}
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
           

        </Navigator>
       
    );
}

export default AppRoutes;