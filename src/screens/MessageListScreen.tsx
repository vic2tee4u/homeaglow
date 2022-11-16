import { ListRenderItem, FlatList, View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { IRoom, IRoomDetails, MessageCard } from '../components/MessageCard';
import { roomList } from '../data/mockData';
import { Header } from '../components/Header';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/root-reducer';

interface IMessageCard {
    onHeaderPress: () => void;
}

const MessageListScreen = ({ onHeaderPress }: IMessageCard) => {
    const { rooms } = useSelector((state: RootState) => state.authentication);;
    const renderMessages: ListRenderItem<IRoom> = ({ item }) => (
        <MessageCard
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            isActive={item.isActive}
            message={item.message}
            messageDateTime={item.messageDateTime}
            onMessagePress={() => {}}
        />
    );

    const renderer = (
        <FlatList
            data={rooms}
            renderItem={renderMessages}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={() => {
                return (
                    <View style={styles.empty}>
                        <Text>No Rooms Available</Text>
                    </View>
                );
            }}
        />
    );
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
    },
    empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export { MessageListScreen };
