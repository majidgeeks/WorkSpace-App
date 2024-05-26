import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import WifiIcon from '../components/Svgs/WifiIcon';
import {Color} from '../constants/Color';
import MWaterIcon from '../components/Svgs/MWaterIcon';
import CafiteriaIcon from '../components/Svgs/CafiteriaIcon';
import PetIcon from '../components/Svgs/PetIcon';
import {moderateScale} from 'react-native-size-matters';
import {useContext} from 'react';
import {WorkspaceContext} from '../WorkspaceContext';

interface FeatureScreenProps {}

const FeatureScreen = (props: FeatureScreenProps) => {
  const workContext = useContext(WorkspaceContext);
  console.log(
    'WorksContext.workspaceContextApi',
    workContext.workspaceContextApi,
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: moderateScale(5),
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: moderateScale(10),
        }}>
        {workContext.workspaceContextApi.amenities.map(data => (
          <View style={{alignItems: 'center'}} key={data.id}>
            <View
              style={{
                backgroundColor: Color.pink,
                paddingHorizontal: moderateScale(20),
                paddingVertical: moderateScale(20),
                borderRadius: 10,
              }}>
              {data.type === 'WIFI' ? (
                <WifiIcon size={28} color={Color.primary} />
              ) : null}
              {data.type === 'WATER' ? (
                <MWaterIcon size={27} color={Color.primary} />
              ) : null}
              {data.type === 'CAFE' ? (
                <CafiteriaIcon size={32} color={Color.primary} />
              ) : null}
              {data.type === 'PET' ? (
                <PetIcon size={31} color={Color.primary} />
              ) : null}
            </View>
            <Text style={{width: 80, textAlign: 'center'}}>{data.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default FeatureScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
