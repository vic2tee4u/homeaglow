import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import moment from 'moment';

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

export interface IRoomDetails {
    roomId: string;
    receiver: User;
    sender: User;
    messages: Array<Message>;
    currentUserId?: string;
    onMessagePress?: (messages: Array<Message>) => void;
}

const MessageCard = ({ receiver, sender, messages, currentUserId, onMessagePress }: IRoomDetails) => {
    const isUserSenderOrReceiver = sender.userId === currentUserId ? receiver : sender;
    return (
        <TouchableOpacity onPress={() => onMessagePress && onMessagePress(messages)}>
            <View style={styles.container}>
                <Image source={{ uri: isUserSenderOrReceiver.profilePicture }} style={styles.img} />
                <View style={styles.header}>
                    <View style={styles.msgHeader}>
                        <Text style={styles.name}>{isUserSenderOrReceiver.username}</Text>
                        <Text>{moment(messages[0].dateSent).format('MMM. D')}</Text>
                    </View>
                    <Text style={styles.sub}>{messages[0].text}</Text>
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
