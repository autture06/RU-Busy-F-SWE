import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

//icons
import { Octicons, Ionicons } from '@expo/vector-icons';

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
    Colors
} from '../components/styles';
import { View } from 'react-native';

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

//Colors
const { brand, darkLight, red } = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <StyledContainer>
            <StatusBar style='dark' />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/images/logo.jpg')} />
                <PageTitle>RU Busy</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="first.last@gmail.com"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />

                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="********"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry = {hidePassword}
                                isPassword = {true}
                                hidePassword = {hidePassword}
                                setHidePassword = {setHidePassword}
                            />
                            <StyledButton onPress = {handleSubmit}>
                                <ButtonText>
                                    Login
                                </ButtonText>
                            </StyledButton>
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

export default Login;