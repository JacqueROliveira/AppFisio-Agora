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
    color: ${({ theme }) => theme.COLORS.STELLBLUE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    width: 100%;
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

export const RetornoDados = styled.Text`
   
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.STELLBLUE};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    
    width: 100%;
    
    border-color: ${({ theme }) => theme.COLORS.STELLBLUE};
    margin-top: 30px;
    padding-bottom: 3px;
    margin-bottom: 10px;
    flex-direction: column;
    
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

export const Container1 = styled(TouchableOpacity)`
    width: 90%;
    height: 60px;
    background-color: ${({ theme }) => theme.COLORS.STELLBLUE};
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 10px;
    margin-bottom: 12px;
    margin-top: 12px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme}) => theme.COLORS.STELLBLUE};
    font-family: ${({ theme}) => theme.FONT_FAMILY.BOLD};
    flex-direction: column;
    padding-bottom: 10px;
`;
export const Position = styled.View`
    flex-direction: column;
`;

export const Preco = styled.Text`
    background-color: ${({ theme }) => theme.COLORS.STELLBLUE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 12px;
    margin-right: 15px;
    padding: 6px;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    border-color: ${({ theme }) => theme.COLORS.STELLBLUE};
    border-width:2px;
    width: 30%;
    height: 15´x;
    text-align: center;
`;
export const Value = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;