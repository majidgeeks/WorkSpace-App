import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectFlowScreen from '../screens/SelectFlowScreen';
import SelectComScreen from '../screens/SelectComScreen';

const Stack = createNativeStackNavigator();

const OnBoardingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SelectFlow" component={SelectFlowScreen} />
      <Stack.Screen name="SelectCommunity" component={SelectComScreen} />
    </Stack.Navigator>
  );
};

export default OnBoardingNavigator;
