import { StyleSheet, View, TextInput, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { colors } from '../constants/theme';

interface ITextInput {
    onChangeText: (text: string) => void;
    value: string;
    placeholder?: string;
    style: StyleProp<ViewStyle>;
    secureTextEntry?: boolean;
}

const CustomTextInput = ({ onChangeText, value, placeholder, style, secureTextEntry }: ITextInput) => {
    return (
        <View style={[styles.wrapper, style]}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
            />
        </View>
    );
};

CustomTextInput.defaultProps = {
    placeholder: 'Enter text',
};

export { CustomTextInput };

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    input: {
        borderBottomWidth: 0,
        borderBottomColor: 'grey',
        width: '100%',
        fontWeight: '500',
        color: colors.secondary,
        paddingHorizontal: 4,
    },
});
