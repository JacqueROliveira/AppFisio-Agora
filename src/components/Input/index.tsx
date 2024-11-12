import { TextInputProps} from 'react-native'
import { Container } from './styles'
import { useTheme} from 'styled-components/native'

export function Input({ ...rest }: TextInputProps) {
    const {COLORS} = useTheme();
    return(
        <Container
        placeholderTextColor={COLORS.STELLBLUE}
            {...rest}
        />
    );
}

export function Password({...rest}: TextInputProps){
    const {COLORS} = useTheme();
    return(
        <Container
        placeholderTextColor={COLORS.STELLBLUE}
            {...rest}
        />
    );
}

export function Nome({...rest}: TextInputProps){
    const {COLORS} = useTheme();
    return(
        <Container
        placeholderTextColor={COLORS.STELLBLUE}
            {...rest}
        />
    );
}

export function SobreNome({...rest}: TextInputProps){
    const {COLORS} = useTheme();
    return(
        <Container
        placeholderTextColor={COLORS.STELLBLUE}
            {...rest}
        />
    );
}

export function Data({...rest}: TextInputProps){
    const {COLORS} = useTheme();
    return(
        <Container
        placeholderTextColor={COLORS.STELLBLUE}
            {...rest}
        />
    );
}