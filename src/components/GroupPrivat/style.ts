import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container1 = styled(TouchableOpacity)`
    width: 100%;
    height: 80´x;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.Azul};
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 12px;
    border-color: ${({ theme }) => theme.COLORS.Azul};
    border-width:2px;
`;
export const Container2 = styled(TouchableOpacity)`
     width: 100%;
    height: 80´x;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.Azul};
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 12px;
    border-color: ${({ theme }) => theme.COLORS.Azul};
    border-width:2px;
`;
export const Container3 = styled(TouchableOpacity)`
     width: 100%;
    height: 80´x;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.Azul};
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 12px;
    border-color: ${({ theme }) => theme.COLORS.Azul};
    border-width:2px;
`;
export const Preco = styled.Text`
    background-color: ${({ theme }) => theme.COLORS.Azul};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 12px;
    margin-bottom: 0px;
    margin-right: 15px;
    padding: 6px;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    border-color: ${({ theme }) => theme.COLORS.Azul};
    border-width:2px;
    width: 30%;
    height: 15´x;
    text-align: center;
`;
export const Position = styled(TouchableOpacity)`
    flex-direction: row;
`;
export const Agendar = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 12px;
    border-color: ${({ theme }) => theme.COLORS.Azul};
    border-width:2px;
    margin-bottom: 0px;
    padding: 6px;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    width: 60%;
    height: 15´x;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme }) => theme.COLORS.Azul};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.Azul};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    margin-bottom: 12px;
`;
export const Texto = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.Azul};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const Value = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const Privat = styled.Text`
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.COLORS.Laranja};
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 10px;
    margin-bottom: 12px;
    margin-top: 12px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
`;
export const TextSelecao = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme}) => theme.COLORS.WHITE};
    font-family: ${({ theme}) => theme.FONT_FAMILY.BOLD};
`;
export const PositionScreen = styled.View`
    flex: 1;
    margin-top: 20px;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
`;
export const ButtonVoltar = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.COLORS.Azul};
`;