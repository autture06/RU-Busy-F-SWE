import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer, 
    WelcomeImage, 
    Avatar
} from '../components/styles';

const Welcome = () => {

    return (
        <>
            <StatusBar style='light' />
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/images/welcome.jpg')}/>
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

export default Welcome;