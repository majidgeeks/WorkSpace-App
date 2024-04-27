
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/ExploreScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import BookingsScreen from '../screens/BookingsScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfilesScreen from '../screens/ProfilesScreen';
import SearchIcon from '../components/Svgs/SearchIcon';
import { Color } from '../constants/Color';
import FavouritesIcon from '../components/Svgs/FavouritesIcon';
import BookingsIcon from '../components/Svgs/BookingsIcon';
import ChatIcon from '../components/Svgs/ChatIcon';
import ProfilesIcon from '../components/Svgs/ProfilesIcon';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
     screenOptions={{
        tabBarStyle:{backgroundColor:Color.primary},
        tabBarActiveBackgroundColor:Color.whiteSecondary,
        tabBarActiveTintColor:Color.primary,
        tabBarInactiveTintColor: Color.whiteSecondary,
     }}
     >
      <Tab.Screen name="Explore" component={ExploreScreen} 
       options={{tabBarIcon:({focused})=>(<SearchIcon  color={focused ? Color.primary : Color.whiteSecondary} size={21}/>),
                headerShown:false
    }}
      />
      <Tab.Screen name="Favourites" component={FavouritesScreen} 
      options={{tabBarIcon:({focused})=>(<FavouritesIcon color={focused ? Color.primary : Color.whiteSecondary} size={25}/>),
                headerShown:false
    }}
      />
      <Tab.Screen name="Bookings" component={BookingsScreen} 
      options={{tabBarIcon:({focused})=>(<BookingsIcon color={focused ? Color.primary : Color.whiteSecondary} size={24} />),
                headerShown:false

    }}
      />
      <Tab.Screen name="Chat" component={ChatScreen} 
      options={{tabBarIcon:({focused})=>(<ChatIcon color={focused ? Color.primary : Color.whiteSecondary} size={22} />)}}
      />
      <Tab.Screen name="Profiles" component={ProfilesScreen} 
      options={{tabBarIcon:({focused})=>(<ProfilesIcon color={focused ? Color.primary : Color.whiteSecondary} size={21} />)}}
      />

      
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;