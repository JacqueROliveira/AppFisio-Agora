    import { TouchableOpacity } from "react-native";
    import styled from "styled-components/native";
    
    export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

    type Props = {
        type: ButtonTypeStyleProps;
    }
    export const Container = styled(TouchableOpacity)<Props>`
        flex: 1;
        min-height: 36px;
        max-height: 36px;
        width: 100%;
        background-color: ${({ theme, type}) => type ==='PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.STELLBLUE};
        border-radius: 12px;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
    `;
    export const Title = styled.Text`
        font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
        color: ${({ theme}) => theme.COLORS.WHITE};
        font-family: ${({ theme}) => theme.FONT_FAMILY.BOLD};
    `;
    export const SubTitle = styled.Text`
        font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
        color: ${({ theme }) => theme.COLORS.GREEN_700};
        font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
        text-align: center;
        width: 90%;
        margin-top: 15px;
    `;
    export const ClickHere = styled(TouchableOpacity)`
        font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
        color: ${({ theme}) => theme.COLORS.GREEN_700};
        font-family: ${({ theme}) => theme.FONT_FAMILY.REGULAR};
    `;
    export const StyledText = styled.Text`
        text-decoration: underline;
        font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
        color: ${({ theme}) => theme.COLORS.GREEN_700};
        font-family: ${({ theme}) => theme.FONT_FAMILY.BOLD};
    `;