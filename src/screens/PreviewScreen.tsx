import React, {useContext} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {WorkspaceContext} from '../WorkspaceContext';

interface PreviewScreenProps {}

const PreviewScreen = (props: PreviewScreenProps) => {
  const workContext = useContext(WorkspaceContext);

  const workContextImages = workContext.workspaceContextApi?.images;

  return workContextImages ? (
    <View style={styles.container}>
      <ScrollView>
        {workContextImages.map(data => (
          <View style={{marginTop: moderateScale(10)}} key={data}>
            <Image
              source={{
                uri: data,
              }}
              style={{
                height: 150,
                marginHorizontal: moderateScale(10),
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  ) : null;
};

export default PreviewScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
