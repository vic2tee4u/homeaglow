import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { hamburgerIcon } from '../assets';

interface IHeader {
    onHeaderPress: () => void;
}

const Header = ({ onHeaderPress }: IHeader) => {
    return (
        <TouchableOpacity onPress={onHeaderPress}>
            <View style={styles.container}>
                <Image source={hamburgerIcon} style={styles.img} resizeMode="contain" />
                <Text style={styles.text}>Homeaglow</Text>
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
