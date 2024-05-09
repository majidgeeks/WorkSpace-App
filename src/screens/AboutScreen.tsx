import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../constants/Color';

interface AboutScreenProps {}

const AboutScreen = (props: AboutScreenProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: moderateScale(15),
          marginTop: moderateScale(10),
          fontWeight: '600',
          color: Color.darkBlue,
          marginLeft: moderateScale(10),
        }}>
        Why We Like it?
      </Text>

      <View
        style={{
          marginHorizontal: moderateScale(10),
          marginVertical: moderateScale(10),
        }}>
        <ScrollView horizontal>
          <TouchableOpacity
            style={{
              backgroundColor: Color.lightGreen,
              paddingHorizontal: moderateScale(15),
              borderRadius: 10,
              marginHorizontal: moderateScale(15),
            }}>
            <Text
              style={{
                fontSize: moderateScale(15),
                marginTop: moderateScale(10),
              }}>
              Abundance
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Color.darkPink,
              padding: moderateScale(10),
              paddingHorizontal: moderateScale(15),
              borderRadius: 10,
            }}>
            <Text style={{fontSize: moderateScale(15)}}>Transcedence</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Color.lightPurple,
              padding: moderateScale(10),
              marginHorizontal: moderateScale(10),
              paddingHorizontal: moderateScale(15),
              borderRadius: 10,
            }}>
            <Text style={{fontSize: moderateScale(15)}}>Harmony</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <Text
        style={{
          fontSize: moderateScale(15),
          marginTop: moderateScale(10),
          fontWeight: '600',
          color: Color.darkBlue,
          marginLeft: moderateScale(10),
        }}>
        Communities
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: moderateScale(5),
          marginVertical: moderateScale(10),
          marginLeft: moderateScale(10),
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: Color.primary,
            borderRadius: 10,
            paddingHorizontal: moderateScale(15),
            paddingVertical: moderateScale(5),
          }}>
          <Text style={{color: Color.primary}}>LGBTQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: Color.primary,
            borderRadius: 10,
            paddingHorizontal: moderateScale(15),
            marginHorizontal: moderateScale(10),
          }}>
          <Text style={{color: Color.primary, marginTop: moderateScale(5)}}>
            Females
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: moderateScale(15),
          marginTop: moderateScale(15),
          fontWeight: '600',
          color: Color.darkBlue,
          marginLeft: moderateScale(10),
        }}>
        The Detailed Story
      </Text>
      <Text
        style={{
          marginHorizontal: moderateScale(10),
          marginTop: moderateScale(10),
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        tempus justo sed risus pulvinar tincidunt.
      </Text>

      <Text
        style={{
          fontSize: moderateScale(15),
          marginTop: moderateScale(15),
          fontWeight: '600',
          color: Color.darkBlue,
          marginLeft: moderateScale(10),
          marginHorizontal: moderateScale(10),
        }}>
        Need to know
      </Text>
      <Text
        style={{
          marginHorizontal: moderateScale(10),
          marginTop: moderateScale(10),
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        tempus justo sed risus pulvinar tincidunt.
      </Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
