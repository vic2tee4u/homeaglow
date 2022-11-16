import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../constants/theme';

interface IButton {
    onPress: () => void;
    text: string;
    disabled: boolean;
}

const Button = ({ onPress, text, disabled }: IButton) => {
    const isDisabled = disabled && { backgroundColor: 'rgba(112,112,112,1)' };
    return (
        <TouchableOpacity onPress={onPress} style={styles.wrapper} disabled={disabled}>
            <View style={[styles.container, { ...isDisabled }]}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

Button.defaultProps = {
    text: 'Button',
};

export { Button };

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 10,
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
});
