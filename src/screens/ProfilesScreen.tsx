import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ProfilesScreenProps {}

const ProfilesScreen = (props: ProfilesScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ProfilesScreen</Text>
    </View>
  );
};

export default ProfilesScreen;

const styles = StyleSheet.create({
  container: {flex:1}
});
