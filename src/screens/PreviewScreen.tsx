import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

interface PreviewScreenProps {}

const PreviewScreen = (props: PreviewScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={{marginTop:moderateScale(10)}}>
        <Image
          source={{
            uri: 'https://etimg.etb2bimg.com/photo/82770052.cms',
          }}
          style={{
            height: 150,
             marginHorizontal: moderateScale(10)}}
        />
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{
              uri: 'https://www.commercialsearch.com/news/wp-content/uploads/sites/46/2020/11/office-workspace-2-courtesy-of-Cecil-King-via-Pixabay.jpg',
            }}
            style={{
              width: '46%',
              height: 110,
              marginHorizontal: moderateScale(5),
              marginVertical: moderateScale(10),
              marginLeft: moderateScale(9),
            }}
          />
          <Image
            source={{
              uri: 'https://kmc.solutions/media/3eknqhxg/carousel-03.jpg?width=500&height=332.14285714285717',
            }}
            style={{
              width: '46%',
              height: 110,
              marginHorizontal: moderateScale(5),
              marginVertical: moderateScale(10),
            }}
          />
        </View>
        <Image
          source={{
            uri: 'https://etimg.etb2bimg.com/photo/82770052.cms',
          }}
          style={{
          height: 150,
          marginHorizontal: moderateScale(10)
        }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: moderateScale(10),
          }}>
          <Image
            source={{
              uri: 'https://www.commercialsearch.com/news/wp-content/uploads/sites/46/2020/11/office-workspace-2-courtesy-of-Cecil-King-via-Pixabay.jpg',
            }}
            style={{width: '46%',
             height: 110
            }}
          />
          <Image
            source={{
              uri: 'https://kmc.solutions/media/3eknqhxg/carousel-03.jpg?width=500&height=332.14285714285717',
            }}
            style={{width: '46%',
             height: 110
            }}
          />
        </View>
        <Image
          source={{
            uri: 'https://etimg.etb2bimg.com/photo/82770052.cms',
          }}
          style={{
          height: 150,
          marginHorizontal: moderateScale(10)
        }}
        />
      </View>
    </View>
  );
};

export default PreviewScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
