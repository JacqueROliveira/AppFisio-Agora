import { TextInputProps} from 'react-native'
import { Container } from './styles'
import { useTheme} from 'styled-components/native'
<<<<<<< HEAD
import { TextInput } from 'react-native';

=======
>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108

export function Input({ ...rest }: TextInputProps) {
    const {COLORS} = useTheme();
    return(
<<<<<<< HEAD
        <>
=======
>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108
        <Container
        placeholderTextColor={COLORS.STELLBLUE}
            {...rest}
        />
<<<<<<< HEAD
        </>
    );
}

/*{export function Nome({ ...rest }: TextInputProps) {
=======
    );
}

export function Nome({ ...rest }: TextInputProps) {
>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108
    const {COLORS} = useTheme();
    return(
        <Container
        placeholderTextColor={COLORS.STELLBLUE}
            {...rest}
        />
    );
<<<<<<< HEAD
}}*/
=======
}
>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108

export function Password({...rest}: TextInputProps){
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