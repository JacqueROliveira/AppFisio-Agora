import {Container} from './styles';
import { GroupCard } from '@components/GroupCard';
import { GroupPrivat } from '@components/GroupPrivat';
import {GroupPublic} from '@components/GroupPublic'
import { Login } from '@components/Login';
import { Log } from 'phosphor-react-native';

export default function Groups(){
    return(
        <Container>
            {/*<Header />*/}

            {/*<GroupCard />*/}
            {/*<GroupPrivat/>*/}
            {/*<GroupPublic/>*/}
            <Login/>
        </Container>

    )
}