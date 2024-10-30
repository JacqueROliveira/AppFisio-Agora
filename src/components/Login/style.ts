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

export const ImputLogin = styled.Text`
    width: 100%;
    text-decoration: underline;


`;

export const ClicHere = styled(TouchableOpacity)`
    border-color: ${({ theme }) => theme.COLORS.GREEN_500} ;
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 24px;
    align-items: center;
`;
export const Logo = styled.Image`
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: center;

`;

export const Content = styled.View`
    flex:1;
    justify-content: center;
`;
