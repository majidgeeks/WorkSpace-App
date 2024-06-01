import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../constants/Color';
import {WorkspaceContext} from '../WorkspaceContext';
import {COMMUNITIES} from '../constants/Onboarding';
import {INTEREST} from '../constants/OnboardingInterest';

interface AboutScreenProps {}

const AboutScreen = (props: AboutScreenProps) => {
  const workContext = useContext(WorkspaceContext);
  console.log('workContext(about)', workContext.workspaceContextApi);

  const workContextData = workContext.workspaceContextApi;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.txt1}>Why We Like it?</Text>
        <ScrollView horizontal>
          {workContextData?.interests.map(index => {
            return (
              <View
                style={{
                  marginHorizontal: moderateScale(5),
                  marginVertical: moderateScale(10),
                }}
                key={index}>
                <TouchableOpacity
                  style={[
                    styles.tag1Btn,
                    {backgroundColor: INTEREST[index].bgColor},
                  ]}>
                  <Text
                    style={{
                      color: INTEREST[index].textColor,
                      fontSize: moderateScale(15),
                    }}>
                    {INTEREST[index].text}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <Text style={styles.comunityTxt}>Communities</Text>
        <View style={{flexDirection: 'row'}}>
          {workContextData?.community.map(index => {
            return (
              <View style={styles.communityView} key={index}>
                <TouchableOpacity style={styles.community1btn}>
                  <Text style={{color: Color.primary}}>
                    {' '}
                    {COMMUNITIES[index]}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <Text style={styles.detailTxt}>The Detailed Story</Text>
        {workContextData ? (
          <Text
            style={{
              marginHorizontal: moderateScale(10),
              marginTop: moderateScale(10),
            }}>
            {workContextData.description}
          </Text>
        ) : null}
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
    // backgroundColor: INTEREST[index].bgColor,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
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
