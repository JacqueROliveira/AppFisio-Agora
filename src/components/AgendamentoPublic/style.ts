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
    padding: 0px 24px;
    align-items: center;
    justify-content: flex-start;
`;
export const FixaCadastro = styled.View`
    flex: 1;
    width: 130%;
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
    color: ${({ theme}) => theme.COLORS.GREEN_700};
    font-family: ${({ theme}) => theme.FONT_FAMILY.REGULAR};
`;
export const CadastroLogo = styled.Text`
    width: 70%;
    height: 50px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border: 5px;
    border-color: ${({ theme}) => theme.COLORS.GREEN_500};
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

export const RetornoDados = styled.Text`
    flex: 1;

    min-height: 20px;
    max-height: 20px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.STELLBLUE};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    border-bottom-color:${({ theme }) => theme.COLORS.GREEN_500} ;
    width: 100%;
    border-Bottom-Width: 2px;
    border-color: ${({ theme }) => theme.COLORS.GREEN_500};
    margin-top: 15px;
    padding-bottom: 3px;
    margin-bottom: 10px;
`;

export const Buttom = styled(TouchableOpacity)`
    flex: 1;

    min-height: 36px;
    max-height: 36px;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.STELLBLUE};

    border-radius: 12px;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`;
