import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import FilterIcon from '../components/Svgs/FilterIcon';
import {Color} from '../constants/Color';
import NotificationIcon from '../components/Svgs/NotificationIcon';

interface EploreScreenProps {}

const EploreScreen = (props: EploreScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={{height: '12%'}}>
        <Text>I’m looking for</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '99%',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: moderateScale(19)}}>Workspaces</Text>
          <View style={{flexDirection: 'row', justifyContent:"space-between",  width:"20%", marginRight:10}}>
            <FilterIcon size={25} color={Color.darkGrey} />
            <NotificationIcon size={24} color={Color.darkGrey} />
          </View>
        </View>
      </View>

      <View style={{height: '10%'}}></View>

      <View style={{height: '78%'}}></View>
    </View>
  );
};

export default EploreScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
