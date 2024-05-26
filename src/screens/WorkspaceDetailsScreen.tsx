import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import AdressIcon from '../components/Svgs/AdressIcon';
import {Color} from '../constants/Color';
import MapImage1 from '../components/Svgs/MapImage1';
import {Images} from '../assets/images';
import CorrectSignIcon from '../components/Svgs/CorrectSignIcon';
import {WorkspaceDetailsTabs} from '../Navigator/WorkspaceStackNavigation';
import LocationIcon from '../components/Svgs/LocationIcon';
import LeftIcon from '../components/Svgs/LeftIcon';
import ChatIcon from '../components/Svgs/ChatIcon';
import FavouriteFilledIcon from '../components/Svgs/FavouriteFilledIcon';
import FavouritesIcon from '../components/Svgs/FavouritesIcon';
import CalendarIcon from '../components/Svgs/CalendarIcon';
import {useNavigation, useRoute, RouteProp,} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { WorkspaceContext } from '../WorkspaceContext';
 


interface WorkspaceDetailsScreenProps {}

const userImages = [
  {
    id: 1,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 2,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 3,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 4,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 5,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 6,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 7,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
  {
    id: 8,
    image: Images.myPic,
    icon: <CorrectSignIcon size={20} color={Color.primary} />,
  },
];

const WorkspaceDetailsScreen = (props: WorkspaceDetailsScreenProps) => {
  const navigation = useNavigation();
  const [favourite, setFavourite] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number[]>([]);
  const route = useRoute<RouteProp<any>>([]);
  const id = route.params?.itemId;
  const [workspace, setWorkspace] = useState();
  const workContext = useContext(WorkspaceContext); 

  console.log("id",id)
   
  const fetchWorkspaceData = async() => {
    const documents = await firestore().collection('Workspaces').doc(id).get();
    // console.log("documents.data()",documents.data());
    const workSpaceData = documents.data();
    setWorkspace(workSpaceData);  
    workContext.setWorkspaceContextApi(workSpaceData);
  }

  useEffect(()=>{
     fetchWorkspaceData();
  },[]);



  // const handleBookingWorkSpace = () => {};

  const toggleFavourite = () => {
    setFavourite(previous => !previous);
    console.log(favourite);
  };

  const selected = (index: number): void => {
    const updatedArray = [...selectedImage];
    updatedArray.push(index);
    // console.log('updatedArray(beforeSet)', updatedArray);
    setSelectedImage(updatedArray);
    // console.log('updatedArray(afterSet)', updatedArray);
  };

  const unSelect = (index: number): void => {
    const updatedArray = [...selectedImage];
    updatedArray.splice(index, 1);
    // console.log('updatedArray(beforeSet)', updatedArray);
    setSelectedImage(updatedArray);
    // console.log('updatedArray(afterSet)', updatedArray);
  };


  console.log("workspace",workspace)
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <LeftIcon />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginLeft: moderateScale(20)}}>
            <View style={{marginTop: moderateScale(3)}}>
              <LocationIcon size={15} color={Color.primary} />
            </View>
            <Text
              style={{
                fontSize: moderateScale(16),
                fontWeight: '500',
                marginLeft: moderateScale(5),
              }}>
              New York
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginRight: moderateScale(15)}}>
            <ChatIcon size={20} color={Color.darkBlue} />
          </TouchableOpacity>
          {favourite ? (
            <TouchableOpacity onPress={toggleFavourite}>
              <FavouritesIcon color={Color.darkGrey} size={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={toggleFavourite}>
              <FavouriteFilledIcon color={Color.primary} size={20} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={{flex: 0.36}}>
        <Text style={styles.txt1}>Warn Spaces</Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: moderateScale(12),
            marginTop: moderateScale(10),
          }}>
          <AdressIcon size={16} color={'#fff'} />
          <Text style={{marginLeft: moderateScale(5)}}>
            Avinguda Diagonal, 444, ground floor, 08037 Barcelona
          </Text>
        </View>
        <View style={{marginTop: moderateScale(15)}}>
          <MapImage1 />
        </View>
      </View>
      <View style={{flex: 0.16}}>
        <View style={styles.midView}>
          <Text style={styles.inviteTxt}>Invite Connection Members</Text>
          <Text style={styles.numTxt}>04</Text>
        </View>
        <FlatList
          horizontal
          data={userImages}
          renderItem={({item, index}) => (
            <View
              style={{
                marginHorizontal: moderateScale(7),
                marginTop: moderateScale(7),
              }}>
              <TouchableOpacity onPress={() => selected(index)}>
                <Image source={item.image} style={styles.img} />
              </TouchableOpacity>
              {selectedImage.includes(index) ? (
                <View style={{position: 'absolute', top: 3, left: 50}}>
                  <TouchableOpacity onPress={() => unSelect(index)}>
                  {item.icon}
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          )}
        />
      </View>
      <View style={{flex: 0.47}}>
        <WorkspaceDetailsTabs />
      </View>
      <View style={styles.bottomView}>
        <View style={{marginLeft: moderateScale(15)}}>
          <Text
            style={{
              color: Color.white,
              fontWeight: '600',
              fontSize: moderateScale(15),
            }}>
            $ 45
          </Text>
          <View style={{flexDirection: 'row', marginTop: moderateScale(5)}}>
            <CalendarIcon size={15} color={Color.white} />
            <Text
              style={{
                color: Color.white,
                fontWeight: '600',
                marginLeft: moderateScale(5),
              }}>
              Tomorrow
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('BookingWorkspace')}
          style={styles.bookNowBtn}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '600',
              color: Color.primary,
            }}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkspaceDetailsScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  headerView: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(10),
    flex: 0.03,
  },
  txt1: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    marginLeft: moderateScale(12),
    color: Color.darkBlue,
    marginTop: moderateScale(10),
  },
  midView: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(10),
    justifyContent: 'space-between',
  },
  inviteTxt: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: Color.darkBlue,
    marginTop: moderateScale(-10),
  },
  numTxt: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: Color.primary,
    marginTop: moderateScale(-8),
    marginRight: moderateScale(5),
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: Color.primary,
    borderWidth: 1,
  },
  bottomView: {
    backgroundColor: Color.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(10),
  },
  bookNowBtn: {
    backgroundColor: Color.white,
    paddingHorizontal: moderateScale(25),
    paddingVertical: moderateScale(10),
    marginRight: moderateScale(10),
    borderRadius: 10,
  },
});

