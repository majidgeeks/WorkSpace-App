import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface FeatureScreenProps {}

const FeatureScreen = (props: FeatureScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>FeatureScreen 1</Text>
    </View>
  );
};

export default FeatureScreen;

const styles = StyleSheet.create({
  container: {flex:1}
});
