import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { back, hamburgerIcon } from '../assets';

interface IHeader {
    onHeaderPress: () => void;
    onBackActive?: boolean;
    onBackPress: () => void;
}

const Header = ({ onHeaderPress, onBackActive, onBackPress }: IHeader) => {
    const icon = onBackActive ? back : hamburgerIcon;
    const onPressAction = onBackActive ? onBackPress : onHeaderPress;
    return (
        <TouchableOpacity onPress={onPressAction}>
            <View style={styles.container}>
                <Image source={icon} style={styles.img} resizeMode="contain" />
                {!onBackActive && <Text style={styles.text}>Homeaglow</Text>}
            </View>
        </TouchableOpacity>
    );
};

export { Header };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
    },
    img: {
        height: 20,
        width: 20,
        marginHorizontal: 20
    }
});
