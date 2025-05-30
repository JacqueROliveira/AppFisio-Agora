import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
    flex: 1;
    min-height: 20px;
    max-height: 20px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.Laranja};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    border-bottom-color:${({ theme }) => theme.COLORS.Laranja} ;
    width: 100%;
    border-Bottom-Width: 2px;
    border-color: ${({ theme }) => theme.COLORS.Laranja};
    margin-top: 15px;
    padding-bottom: 3px;
    margin-bottom: 10px;
`;
export const DadosInputText = styled(TextInput)`
    flex: 1;
    min-height: 20px;
    max-height: 20px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.Laranja};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    border-bottom-color:${({ theme }) => theme.COLORS.Laranja} ;
    width: 100%;
    border-Bottom-Color:${({ theme }) => theme.COLORS.Laranja};
    border-Bottom-Width: 2px;
    border-color: ${({ theme }) => theme.COLORS.Laranja};
    margin-bottom: 25px;
`;
export const Position = styled(TextInput)`
    flex-direction: row;
`;