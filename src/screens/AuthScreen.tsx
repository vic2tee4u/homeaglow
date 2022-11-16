import { StyleSheet, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { CustomTextInput } from '../components/TextInput';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authentication/action';

type SignInForm = {
    username: string;
    password: string;
};

interface IAuthScreen {
    onSignIn?: (arg: SignInForm) => void;
}

const AuthScreen = ({ onSignIn }: IAuthScreen) => {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login({ username: usernameValue, password: passwordValue }));
        setUsernameValue('');
        setPasswordValue('');
        if (onSignIn) {
            onSignIn({ username: usernameValue, password: passwordValue });
        }
    };

    const isFormEmpty = () => {
        return usernameValue.length < 5 || passwordValue.length < 5;
    };
    return (
        <View style={styles.container}>
            <CustomTextInput
                style={styles.inputStyle}
                onChangeText={text => setUsernameValue(text)}
                value={usernameValue}
                placeholder="Enter username"
            />
            <CustomTextInput
                style={styles.inputStyle}
                onChangeText={text => setPasswordValue(text)}
                value={passwordValue}
                placeholder="Enter password"
                secureTextEntry
            />
            <Button onPress={handleLogin} text="Sign In" disabled={isFormEmpty()} />
        </View>
    );
};

export { AuthScreen };

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        width: '80%',
        marginBottom: 10,
    },
});
