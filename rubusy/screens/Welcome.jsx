import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    WelcomeContainer, 
    WelcomeImage, 
    Avatar
} from '../components/styles';
import { View } from 'react-native';

//Colors
const { darkLight, red, primary } = Colors;

const Welcome = () => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <>
            <StatusBar style='dark' />
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/images/welcImg.jpg')}/>
                <WelcomeContainer>
                <PageTitle welcome = {true}>Welcome!!!</PageTitle>
                <SubTitle welcome = {true}>First and Last Name</SubTitle>
                <SubTitle welcome = {true}>first.last@gmail.com</SubTitle>
                        <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('./../assets/images/logo.jpg')} />
                        <Line />
                            <StyledButton onPress = {() => {}}>
                                <ButtonText>Logout</ButtonText>
                            </StyledButton>
                        </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={red} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress = {() => setHidePassword(!hidePassword)}>
                    <Ionicons name = {hidePassword ? 'eye-off' : 'eye'} size = {30} color = {darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};

export default Welcome;