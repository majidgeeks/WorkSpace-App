import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../constants/Color';
import LeftIcon from '../components/Svgs/LeftIcon';
import BadImojiIcon from '../components/Svgs/BadEmojiIcon';
import AverageEmojiIcon from '../components/Svgs/AverageEmojiIcon';
import NiceEmojiIcon from '../components/Svgs/NiceEmojiIcon';
import BestEmojiIcon from '../components/Svgs/BestEmojiIcon';
import AwesomeEmojiIcon from '../components/Svgs/AwesomeEmojiIcon';
import CommunityTagFilled from '../components/CommunityTagFilled';
import { useState } from 'react';
import CommunityTagOutline from '../components/CommunityTagOutline';

interface FeedBackScreenProps {}


const FeedBackScreen = (props: FeedBackScreenProps) => {
    const [selectedItem, setSelectedItem] = useState<number[]>([]);
    const [itemNames, setItemNames ] = useState([
        "Response Time",
        "Costs",
        "Help Received",
        "Quality",
        "Value",
        "Experience"
    ]); 

    const handleSelect = (index : number) => {
       const updatedArray = [...selectedItem];
       updatedArray.push(index);
       console.log("updatedArray",updatedArray);
       setSelectedItem(updatedArray)
       console.log("selectedItem",selectedItem)
    };

    const handleUnSelect = (index : number) => {
       const updatedArray = [...selectedItem];
       updatedArray.splice(index, 1);
       setSelectedItem(updatedArray);
       console.log("selectedItem after splice", selectedItem)
    }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity>
          <LeftIcon />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: moderateScale(18),
            fontWeight: '500',
            marginLeft: moderateScale(120),
          }}>
          Feedbacks
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: moderateScale(1),
          justifyContent: 'space-evenly',
          marginVertical:moderateScale(20)
        }}>
        <TouchableOpacity>
          <BadImojiIcon />
          <Text style={{textAlign: 'center', marginTop: moderateScale(5)}}>
            Bad
          </Text>
        </TouchableOpacity>
        
         <TouchableOpacity>
          <AverageEmojiIcon />
          <Text style={{textAlign: 'center', marginTop: moderateScale(5)}}>
            Average
          </Text>
         </TouchableOpacity>
        <TouchableOpacity>
          <NiceEmojiIcon />
          <Text style={{textAlign: 'center', marginTop: moderateScale(5)}}>
            Nice
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <BestEmojiIcon />
          <Text style={{textAlign: 'center', marginTop: moderateScale(5)}}>
            Best
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <AwesomeEmojiIcon />
          <Text style={{textAlign: 'center', marginTop: moderateScale(5)}}>
            Awesome
          </Text>
        </TouchableOpacity>
      </View>

     <View>
        <Text style={{fontSize:moderateScale(18), fontWeight:"500", textAlign:"center"}}>Why would you like this?</Text>
     <View style={styles.tagView}>
        {itemNames.map((data, index) => {
            return selectedItem.includes(index) ? (
                <CommunityTagFilled
                text={data}
                key={data}
                onPress={() => handleSelect(index)}
                />     
            ) : (
               <CommunityTagOutline
               text={data}
               key={data}
               onPress={() => handleUnSelect(index)}
               />
            )
        })}

     </View>
     </View>

    </View>
  );
};

export default FeedBackScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  container1: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(10),
    backgroundColor: Color.white,
  },
  tagView: {
    marginVertical: moderateScale(20),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: moderateScale(25),
  },
});
