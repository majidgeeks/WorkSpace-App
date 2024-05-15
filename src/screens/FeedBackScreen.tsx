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
import {useState} from 'react';
import CommunityTagOutline from '../components/CommunityTagOutline';
import CustomInput from '../components/Input';
import {useForm, Controller} from 'react-hook-form';

interface FeedBackScreenProps {}

const FeedBackScreen = (props: FeedBackScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      notes: '',
    },
  });

  const [selectedItem, setSelectedItem] = useState<number[]>([]);
  const [itemNames, setItemNames] = useState([
    'Response Time',
    'Costs',
    'Help Received',
    'Quality',
    'Value',
    'Experience',
  ]);

  const handleSelect = (index: number) => {
    const updatedArray = [...selectedItem];
    updatedArray.push(index);
    console.log('updatedArray', updatedArray);
    setSelectedItem(updatedArray);
    console.log('selectedItem', selectedItem);
  };

  const handleUnSelect = (index: number) => {
    const updatedArray = [...selectedItem];
    updatedArray.splice(index, 1);
    setSelectedItem(updatedArray);
    console.log('selectedItem after splice', selectedItem);
  };

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
      <View style={styles.emojiView}>
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
        <Text style={styles.midTxt}>Why would you like this?</Text>
        <View style={styles.tagView}>
          {itemNames.map((data, index) => {
            return selectedItem.includes(index) ? (
              <CommunityTagFilled
                text={data}
                key={data}
                onPress={() => handleUnSelect(index)}
              />
            ) : (
              <CommunityTagOutline
                text={data}
                key={data}
                onPress={() => handleSelect(index)}
              />
            );
          })}
        </View>
      </View>
      <View style={{marginVertical: moderateScale(10)}}>
        <Controller
          name="notes"
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {value, onChange}, fieldState: {error}}) => (
            <>
              <CustomInput
                value={value}
                onChange={onChange}
                label="Additional Notes"
                placeholder="Write here"
                labelStyle={{
                  color: Color.black,
                  fontWeight: '300',
                  marginLeft: moderateScale(10),
                  marginVertical: moderateScale(10),
                }}
                inputContainerStyle={{borderBottomWidth: 0}}
                style={{backgroundColor: Color.lightGrey, height: 150}}
              />
              {error?.message ? <Text>{error.message}</Text> : null}
            </>
          )}
        />
      </View>
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitBtnTxt}>Submit</Text>
      </TouchableOpacity>
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
  },
  emojiView: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
    justifyContent: 'space-evenly',
    marginVertical: moderateScale(25),
  },
  midTxt: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    textAlign: 'center',
    marginTop: moderateScale(10),
  },
  tagView: {
    marginVertical: moderateScale(20),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: moderateScale(25),
  },
  submitBtn: {
    borderWidth: 1,
    backgroundColor: Color.darkBlue,
    height: moderateScale(45),
    borderRadius: 10,
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(20),
  },
  submitBtnTxt: {
    textAlign: 'center',
    fontSize: moderateScale(18),
    marginTop: moderateScale(7),
    color: Color.white,
  },
});
