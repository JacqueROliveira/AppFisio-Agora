import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Groups from '@screens/Groups';
import { Index } from '@components/Cadastro/Index';
import { GroupCard } from '@components/GroupCard';
import { GroupPrivat } from '@components/GroupPrivat';
import { GroupPublic } from '@components/GroupPublic';
import { ConfirmacaoPrivat } from '@components/ConfirmacaoPrivat';
import { ConfirmacaoPublic } from '@components/ConfirmacaoPublic';
import { AgendamentoPrivat } from '@components/AgendamentoPrivat';
import { AgendamentoPublic } from '@components/AgendamentoPublic';
import { DadosCadastrais } from '@components/DadosCadastrais';
import { SQLiteProvider } from 'expo-sqlite';
import { initializeDatabase } from 'src/dataBase/initializeDatabase';



const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <SQLiteProvider databaseName="myDatabase.db" onInit={initializeDatabase}>
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
            name="groups"
            component={Groups}
            />
            <Screen
            name="cadastro"
            component={Index}
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
             <Screen
            name="dadosCadastrais"
            component={DadosCadastrais}
            />

        </Navigator>
        </SQLiteProvider>
    );
}

export default AppRoutes;