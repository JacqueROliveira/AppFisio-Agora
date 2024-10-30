import { TextInput } from "react-native";
import styled from "styled-components/native";
import * as React from 'react-native'; 

export const Container = styled(TextInput)`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.STELLBLUE};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    border-bottom-color:${({ theme }) => theme.COLORS.STELLBLUE} ;
    width: 100%;
    border-Bottom-Color: 'grey';
    border-Bottom-Width: 2px;
    border-color: ${({ theme }) => theme.COLORS.STELLBLUE};
    margin-bottom: 25px;
`;