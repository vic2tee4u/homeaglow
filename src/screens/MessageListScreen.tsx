import { ListRenderItem, FlatList, View, StyleSheet } from 'react-native';
import React from 'react';
import { IRoomDetails, MessageCard } from '../components/MessageCard';
import { roomList } from '../data/mockData';
import { Header } from '../components/Header';

interface IMessageCard {
    onHeaderPress: () => void;
}

const MessageListScreen = ({ onHeaderPress }: IMessageCard) => {
    const renderMessages: ListRenderItem<IRoomDetails> = ({ item }) => (
        <MessageCard
            roomId={item.roomId}
            messages={item.messages}
            receiver={item.receiver}
            sender={item.sender}
            onMessagePress={() => {}}
        />
    );

    const renderer = <FlatList data={roomList} renderItem={renderMessages} keyExtractor={item => item.roomId} />;
    return (
        <View>
            <View style={styles.headerHolder}>
                <Header onHeaderPress={onHeaderPress} />
            </View>
            {renderer}
        </View>
    );
};

const styles = StyleSheet.create({
    headerHolder: {
        marginTop: 30,
        marginBottom: 20,
    }
})

export { MessageListScreen };
