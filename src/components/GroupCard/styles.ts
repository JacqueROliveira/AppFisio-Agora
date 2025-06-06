import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container1 = styled(TouchableOpacity)`
    width: 90%;
    height: 60px;
    background-color: ${({ theme }) => theme.COLORS.Azul};
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 10px;
    margin-bottom: 12px;
    margin-top: 12px;
`;
export const Container2 = styled(TouchableOpacity)`
    width: 90%;
    height: 60px;
    background-color: ${({ theme }) => theme.COLORS.Azul};
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 10px;
    margin-bottom: 12px;
    margin-top: 12px;
`;
export const Container3 = styled(TouchableOpacity)`
    
    width: 90%;
    height: 60px;
    background-color: ${({ theme }) => theme.COLORS.Azul};
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 10px;
    margin-bottom: 12px;
    margin-top: 12px;
    
`;
export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme}) => theme.COLORS.WHITE};
    font-family: ${({ theme}) => theme.FONT_FAMILY.REGULAR};
`;
export const TitleCadastral = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme}) => theme.COLORS.Azul};
    font-family: ${({ theme}) => theme.FONT_FAMILY.REGULAR};
`;
export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.Laranja};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    margin-bottom: 40px;
    text-align: center;
`;
export const Icon = styled.Image`
width: 200px;
height: 200px;
margin-bottom: 12px;
`;
export const Logo = styled.Image`
    width: 200px;
    height: 200px;
`;
export const Container = styled.View`
    
    margin-top: 20px;
    width: 100%;
    flex-direction: column ;
    align-items: center;
    justify-content: center;
`;