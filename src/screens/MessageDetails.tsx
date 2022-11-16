import { Composer, ComposerProps, GiftedChat, InputToolbar, InputToolbarProps } from 'react-native-gifted-chat';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/root-reducer';
import { StyleSheet, View } from 'react-native';

const MessageDetails = () => {
    const [messages, setMessages] = useState<any>([]);
    const { selectedRoomMessages, userDetails } = useSelector((state: RootState) => state.authentication);

    console.log(messages);
    useEffect(() => {
        setMessages(selectedRoomMessages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const onSend = useCallback((m = []) => {
        setMessages((previousMessages: any) => GiftedChat.append(previousMessages, m));
    }, []);

    const renderComposer = (props: ComposerProps) => (
        <Composer {...props} keyboardAppearance="dark" textInputAutoFocus />
    );

    const renderInputToolbar = (props: any) => <InputToolbar {...props}/>;
    return (
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={(msg: any) => onSend(msg)}
                showAvatarForEveryMessage={false}
                infiniteScroll
                user={{
                    _id: userDetails.user_type,
                    name: `${userDetails.first_name}`,
                }}
                renderComposer={renderComposer}
                renderInputToolbar={renderInputToolbar}
                wrapInSafeArea
                alignTop
                alwaysShowSend
                bottomOffset={100}
                scrollToBottom
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { width: '100%', height: '100%' },
});

export { MessageDetails };
