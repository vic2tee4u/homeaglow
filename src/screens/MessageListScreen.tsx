import { ListRenderItem, FlatList, View, StyleSheet, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { IRoom, MessageCard } from '../components/MessageCard';
import { Header } from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/root-reducer';
import { getUserMessages } from '../redux/authentication/action';
import { MessageDetails } from './MessageDetails';

interface IMessageCard {
    onHeaderPress: () => void;
}

const MessageListScreen = ({ onHeaderPress }: IMessageCard) => {
    const [roomSelected, setRoomSelected] = useState(false);
    const { rooms } = useSelector((state: RootState) => state.authentication);
    const dispatch = useDispatch();

    const handleRoomSelection = (id: number) => {
        dispatch(getUserMessages({ id }));
        setRoomSelected(!roomSelected);
    };

    const renderMessages: ListRenderItem<IRoom> = ({ item }) => (
        <MessageCard
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            isActive={item.isActive}
            message={item.message}
            messageDateTime={item.messageDateTime}
            onMessagePress={handleRoomSelection}
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

    const renderChatScreen = <MessageDetails />;
    return (
        <SafeAreaView>
            <View style={styles.headerHolder}>
                <Header
                    onHeaderPress={onHeaderPress}
                    onBackActive={roomSelected}
                    onBackPress={() => setRoomSelected(!roomSelected)}
                />
            </View>
            {roomSelected ? renderChatScreen : renderer}
        </SafeAreaView>
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
