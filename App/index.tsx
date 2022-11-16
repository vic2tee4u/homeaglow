import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { AuthScreen } from '../src/screens/AuthScreen';
import { MessageListScreen } from '../src/screens/MessageListScreen';

const App = () => {
    /** Mocking navigation with this. Idealy will integrate react-navigation for better transition */
    const [isLoggedin, setIsLoggedIn] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {isLoggedin ? (
                    <MessageListScreen onHeaderPress={() => setIsLoggedIn(!isLoggedin)} />
                ) : (
                    <AuthScreen onSignIn={() => setIsLoggedIn(!isLoggedin)} />
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

export default App;
