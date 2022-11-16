import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import moment from 'moment';
import { man, woman } from '../assets';

export type User = {
    username: string;
    profilePicture: string;
    userId: string;
};

export type Message = {
    text: string;
    sender: string;
    dateSent: string;
    messageId: string;
};

export interface IRoom {
    id: number;
    firstName: string;
    isActive: boolean;
    message: string;
    lastName: string;
    messageDateTime: string;
    onMessagePress: (roomId: number) => void;
}

const MessageCard = ({ id, firstName, lastName, message, messageDateTime, onMessagePress }: IRoom) => {
    const numberGenerator = Math.floor(Math.random() * 2);
    const isManOrWoman = numberGenerator === 2 ? man : woman;
    return (
        <TouchableOpacity onPress={() => onMessagePress && onMessagePress(id)}>
            <View style={styles.container}>
                <Image source={isManOrWoman} style={styles.img} />
                <View style={styles.header}>
                    <View style={styles.msgHeader}>
                        <Text style={styles.name}>
                            {firstName.split('_')[0]} {lastName}
                        </Text>
                        <Text>{moment(messageDateTime).format('MMM. D')}</Text>
                    </View>
                    <Text numberOfLines={3} ellipsizeMode="tail" style={styles.sub}>
                        {message}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export { MessageCard };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomWidth: 0.4,
        paddingBottom: 10,
    },
    img: {
        width: 50,
        height: 50,
    },
    msgHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        marginLeft: 20,
        width: '100%',
        flex: 1,
    },
    sub: {
        fontSize: 12,
        color: 'rgba(45,45,45,1)',
    },
    name: {
        fontWeight: 'bold',
    },
});
