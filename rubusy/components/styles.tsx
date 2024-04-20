import styled from 'styled-components/native';
import {View, Text, Image} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

//colors 
export const Colors = {
    primary: "#ffffff", //white
    secondary: "#E5E7EB", //light gray
    tertiary: "#1F2937", //black
    darkLight: "#9CA3AF", //dark gray
    brand: "#6D28D9", //purple
    green: "#10B981", //green
    red: "#EF4444", //red
};

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 300px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${red};
    padding: 10px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px
    letter-spacing: 1px;
    font-weight: bold;
    cold: ${tertiary};
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;