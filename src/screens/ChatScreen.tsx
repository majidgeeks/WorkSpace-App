import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ChatScreenProps {}

const ChatScreen = (props: ChatScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ChatScreen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {flex:1}
});
