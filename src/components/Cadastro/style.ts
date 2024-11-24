import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Texto = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.STELLBLUE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.GREEN_500};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    margin-bottom: 12px;
`;

export const Input = styled.Text`
    width: 100%;
    text-decoration: underline;
`;

export const ClicHere = styled(TouchableOpacity)`
    border-color: ${({ theme }) => theme.COLORS.GREEN_500} ;
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
<<<<<<< HEAD
    padding: 10px 24px;
=======
    padding: 0px 24px;
>>>>>>> caf67b2822f678fb4f997902c8f0f078d175c108
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;
export const FixaCadastro = styled.View`
    flex: 1;
    width: 120%;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 0px 24px;
    justify-content: flex-start;
`;
export const Logo = styled.Image`
    width: 100px;
    height: 100px;
    justify-content: flex-end;
    align-items: center;
`;

export const Content = styled.View`
    flex:1;
    justify-content: center;
`;

export const TextSelecao = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme}) => theme.COLORS.STELLBLUE};
    font-family: ${({ theme}) => theme.FONT_FAMILY.REGULAR};
`;
export const CadastroLogo = styled.Text`
    width: 70%;
    height: 50px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border: 5px;
    border-color: ${({ theme}) => theme.COLORS.STELLBLUE};
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 10px;
    margin-bottom: 12px;
    margin-top: 12px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;