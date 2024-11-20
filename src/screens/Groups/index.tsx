import {Container} from './styles';
import { Login } from '@components/Login';
import { SQLiteProvider } from 'expo-sqlite';
import { initializeDatabase } from 'src/dataBase/initializeDatabase';

export default function Groups(){
    return(

        <SQLiteProvider databaseName='myDatabase.db' onInit={initializeDatabase}>
        <Container>
            <Login/>
        </Container>
        </SQLiteProvider>
    )
}