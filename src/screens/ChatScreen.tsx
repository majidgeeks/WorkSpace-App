import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  FlatListProps,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import CustomInput from '../components/Input';
import {Images} from '../assets/images';
import {Color} from '../constants/Color';
import {moderateScale} from 'react-native-size-matters';

interface ChatScreenProps {}

const chatsCard = [
  {
    id: 1,
    image: Images.myPic,
    title: 'Dream Works',
    message: 'Hi, we were looking for your ...',
    messageCount: '07 NEW',
    messageTime: '2 min ago',
  },
  {
    id: 2,
    image: Images.myPic,
    title: 'Dream Works',
    message: 'Hi, we were looking for your ...',
    messageCount: '07 NEW',
    messageTime: '2 min ago',
  },
  {
    id: 3,
    image: Images.myPic,
    title: 'Dream Works',
    message: 'Hi, we were looking for your ...',
    messageCount: '07 NEW',
    messageTime: '2 min ago',
  },
  {
    id: 4,
    image: Images.myPic,
    title: 'Dream Works',
    message: 'Hi, we were looking for your ...',
    messageCount: '07 NEW',
    messageTime: '2 min ago',
  },
  {
    id: 5,
    image: Images.myPic,
    title: 'Dream Works',
    message: 'Hi, we were looking for your ...',
    messageCount: '07 NEW',
    messageTime: '2 min ago',
  },
  {
    id: 6,
    image: Images.myPic,
    title: 'Dream Works',
    message: 'Hi, we were looking for your ...',
    messageCount: '07 NEW',
    messageTime: '2 min ago',
  },
  {
    id: 7,
    image: Images.myPic,
    title: 'Dream Works',
    message: 'Hi, we were looking for your ...',
    messageCount: '07 NEW',
    messageTime: '2 min ago',
  },
  {
    id: 8,
    image: Images.myPic,
    title: 'Dream Works',
    message: 'Hi, we were looking for your ...',
    messageCount: '07 NEW',
    messageTime: '2 min ago',
  },
  {
    id: 9,
    image: Images.myPic,
    title: 'Dream Works',
    message: 'Hi, we were looking for your ...',
    messageCount: '07 NEW',
    messageTime: '2 min ago',
  },
  {
    id: 10,
    image: Images.myPic,
    title: 'Dream Works',
    message: 'Hi, we were looking for your ...',
    messageCount: '07 NEW',
    messageTime: '2 min ago',
  },
];

const ChatScreen = (props: ChatScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      searchChats: '',
    },
  });

  return (
    <View style={styles.container}>
      <Controller
        name="searchChats"
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <>
            <CustomInput
              onChange={onChange}
              value={value}
              placeholder="Search Chat"
              inputContainerStyle={{borderBottomWidth: 0}}
            />
            {error?.message ? <Text>{error.message}</Text> : null}
          </>
        )}
      />
      <FlatList
        data={chatsCard}
        renderItem={({item}) => (
          <View style={styles.listview1}>
            <Image source={item.image} style={styles.userImage} />
            <View style={styles.listmidView}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: Color.primary,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  {item.title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={styles.messageCountView}></View>
                  <Text style={{color: Color.primary}}>
                    {item.messageCount}
                  </Text>
                </View>
              </View>
              <Text style={{marginVertical: moderateScale(1)}}>
                {item.message}
              </Text>
              <Text>{item.messageTime}</Text>
            </View>
          </View>
        )}
        keyExtractor={index => `${index.id}`}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  listview1: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginRight: moderateScale(5),
    marginBottom: moderateScale(10),
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: moderateScale(7),
  },
  listmidView: {
    width: '73%',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: Color.primary,
  },
  messageCountView: {
    width: 4,
    height: 4,
    backgroundColor: Color.primary,
    borderRadius: 50,
    marginRight: moderateScale(5),
  },
});
