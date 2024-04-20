import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface BookingsScreenProps {}

const BookingsScreen = (props: BookingsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>BookingsScreen</Text>
    </View>
  );
};

export default BookingsScreen;

const styles = StyleSheet.create({
  container: {flex:1}
});
