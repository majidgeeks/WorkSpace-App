import React, { useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../constants/Color';
import { WorkspaceContext } from '../WorkspaceContext';


interface AboutScreenProps {}

const AboutScreen = (props: AboutScreenProps) => {
  const workContext = useContext(WorkspaceContext);
  console.log("workContext(about)",workContext.workspaceContextApi);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.txt1}>Why We Like it?</Text>
        <View
          style={{
            marginHorizontal: moderateScale(10),
            marginVertical: moderateScale(10),
          }}>
          <ScrollView horizontal>
            <TouchableOpacity style={styles.tag1Btn}>
              <Text
                style={{
                  fontSize: moderateScale(15),
                  marginTop: moderateScale(10),
                }}>
                Abundance
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tag2Btn}>
              <Text style={{fontSize: moderateScale(15)}}>Transcedence</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tag3Btn}>
              <Text style={{fontSize: moderateScale(15)}}>Harmony</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <Text style={styles.comunityTxt}>Communities</Text>
        <View style={styles.communityView}>
          <TouchableOpacity style={styles.community1btn}>
            <Text style={{color: Color.primary}}>LGBTQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.community2btn}>
            <Text style={{color: Color.primary, marginTop: moderateScale(5)}}>
              Females
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.detailTxt}>The Detailed Story</Text>
        <Text
          style={{
            marginHorizontal: moderateScale(10),
            marginTop: moderateScale(10),
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tempus justo sed risus pulvinar tincidunt.
        </Text>
        <Text style={styles.needTxt}>Need to know</Text>
        <Text
          style={{
            marginHorizontal: moderateScale(10),
            marginTop: moderateScale(10),
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tempus justo sed risus pulvinar tincidunt.
        </Text>
      </ScrollView>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  txt1: {
    fontSize: moderateScale(15),
    marginTop: moderateScale(10),
    fontWeight: '600',
    color: Color.darkBlue,
    marginLeft: moderateScale(10),
  },
  tag1Btn: {
    backgroundColor: Color.lightGreen,
    paddingHorizontal: moderateScale(15),
    borderRadius: 10,
    marginHorizontal: moderateScale(15),
  },
  tag2Btn: {
    backgroundColor: Color.darkPink,
    padding: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    borderRadius: 10,
  },
  tag3Btn: {
    backgroundColor: Color.lightPurple,
    padding: moderateScale(10),
    marginHorizontal: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    borderRadius: 10,
  },
  comunityTxt: {
    fontSize: moderateScale(15),
    marginTop: moderateScale(10),
    fontWeight: '600',
    color: Color.darkBlue,
    marginLeft: moderateScale(10),
  },
  communityView: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(5),
    marginVertical: moderateScale(10),
    marginLeft: moderateScale(10),
  },
  community1btn: {
    borderWidth: 1,
    borderColor: Color.primary,
    borderRadius: 10,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
  },
  community2btn: {
    borderWidth: 1,
    borderColor: Color.primary,
    borderRadius: 10,
    paddingHorizontal: moderateScale(15),
    marginHorizontal: moderateScale(10),
  },
  detailTxt: {
    fontSize: moderateScale(15),
    marginTop: moderateScale(15),
    fontWeight: '600',
    color: Color.darkBlue,
    marginLeft: moderateScale(10),
  },
  needTxt: {
    fontSize: moderateScale(15),
    marginTop: moderateScale(15),
    fontWeight: '600',
    color: Color.darkBlue,
    marginLeft: moderateScale(10),
    marginHorizontal: moderateScale(10),
  },
});
