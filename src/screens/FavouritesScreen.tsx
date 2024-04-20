import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface FavouritesScreenProps {}

const FavouritesScreen = (props: FavouritesScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>FavouritesScreen</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {flex:1}
});
