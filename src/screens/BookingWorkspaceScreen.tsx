import React, {useState, useMemo} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import LeftIcon from '../components/Svgs/LeftIcon';
import {moderateScale} from 'react-native-size-matters';
import {Images} from '../assets/images';
import LocationIcon from '../components/Svgs/LocationIcon';
import {Color} from '../constants/Color';
import EditIcon from '../components/Svgs/EditIcon';
import CustomInput from '../components/Input';
import {useForm, Controller} from 'react-hook-form';
import PlusIcon from '../components/Svgs/PlusIcon';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import MasterCardIcon from '../components/Svgs/MasterCardIcon';
import VisaCardIcon from '../components/Svgs/VisaCardIcon';

interface BookingWorkspaceScreenProps {}

const BookingWorkspaceScreen = (props: BookingWorkspaceScreenProps) => {
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'xxxx xxxx xxxx 9370',
        value: 'option1',
      },
      {
        id: '2',
        label: 'xxxx xxxx xxxx 2367',
        value: 'option2',
      },
      {
      id : '3',
      label : 'Add New Card',
      value : 'option3'
      },
    ],
    [],
  );

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: moderateScale(15),
          marginTop: moderateScale(10),
        }}>
        <TouchableOpacity>
          <LeftIcon />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: moderateScale(18),
            fontWeight: '500',
            marginLeft: moderateScale(120),
          }}>
          Booking
        </Text>
      </View>

      <View
        style={{
          marginTop: moderateScale(10),
          backgroundColor: Color.white,
          flexDirection: 'row',
          borderBottomWidth: 2,
          borderColor: Color.lightGrey,
          paddingVertical: moderateScale(15),
        }}>
        <Image
          source={Images.WorkspaceImage}
          style={{
            width: 150,
            height: 90,
            borderRadius: 10,
            backgroundColor: 'red',
            marginLeft: moderateScale(15),
          }}
        />
        <View style={{marginLeft: moderateScale(10), justifyContent: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: moderateScale(15),
              color: Color.primary,
            }}>
            Warn Spaces
          </Text>
          <View style={{flexDirection: 'row', marginTop: moderateScale(5)}}>
            <View style={{marginTop: moderateScale(4)}}>
              <LocationIcon color={Color.primary} size={12} />
            </View>
            <Text style={{marginLeft: moderateScale(4), color: Color.black}}>
              New York
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingVertical: moderateScale(10),
          borderBottomWidth: 2,
          borderColor: Color.lightGrey,
          backgroundColor: Color.white,
        }}>
        <View style={{flexDirection: 'row', marginLeft: moderateScale(10)}}>
          <Image
            source={Images.moonImage}
            style={{width: 20, height: 20, borderRadius: 50}}
          />
          <View style={{position: 'absolute', top: 0, left: 8}}>
            <Image
              source={Images.myPic}
              style={{width: 20, height: 20, borderRadius: 50}}
            />
          </View>
        </View>
        <Text style={{marginLeft: moderateScale(20), color: Color.primary}}>
          04 Connections Invited
        </Text>
        <View style={{position: 'absolute', left: 270, bottom: -5}}>
          <EditIcon />
        </View>
      </View>

      <View
        style={{
          borderBottomWidth: 2,
          borderColor: Color.lightGrey,
          backgroundColor: Color.white,
        }}>
        <Text
          style={{
            marginLeft: moderateScale(12),
            color: Color.black,
            marginBottom: moderateScale(5),
            marginTop:moderateScale(10)
          }}>
          Invite Others
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {value, onChange}, fieldState: {error}}) => (
              <>
                <CustomInput
                  style={{
                    marginLeft: moderateScale(20),
                    marginHorizontal: moderateScale(20),
                    backgroundColor: Color.lightGrey,
                  }}
                  value={value}
                  onChange={onChange}
                  placeholder="Enter Email Id"
                  inputContainerStyle={{borderBottomWidth: 0}}
                />
                {error?.message ? <Text>{error.message}</Text> : null}
              </>
            )}
          />

          <TouchableOpacity
            style={{
              backgroundColor: Color.primary,
              marginRight: moderateScale(35),
              marginTop: moderateScale(6),
              height: 44,
              paddingHorizontal: moderateScale(10),
              paddingVertical: moderateScale(5),
              borderRadius: 5,
            }}>
            <View style={{marginTop: moderateScale(3)}}>
              <PlusIcon />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          borderBottomWidth: 2,
          borderColor: Color.lightGrey,
          paddingVertical: moderateScale(10),
          backgroundColor: Color.white,
          
        }}>
        <Text
          style={{
            fontWeight: '600',
            color: Color.darkBlue,
            marginLeft: moderateScale(12),
            marginTop:moderateScale(10)
          }}>
          Payment Summary
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: moderateScale(10),
            marginHorizontal: moderateScale(12),
            justifyContent: 'space-between',
          }}>
          <Text style={{color: Color.black}}>Price 1</Text>
          <Text style={{color: Color.primary}}>$ 25.00</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: moderateScale(5),
            marginHorizontal: moderateScale(12),
            justifyContent: 'space-between',
          }}>
          <Text style={{color: Color.black}}>Tax (10%)</Text>
          <Text style={{color: Color.primary}}>$ 2.50</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: moderateScale(15),
            marginHorizontal: moderateScale(12),
            justifyContent: 'space-between',
          }}>
          <Text style={{color: Color.black}}>Total</Text>
          <Text style={{color: Color.primary}}>$ 27.50</Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontWeight: '600',
            color: Color.darkBlue,
            marginLeft: moderateScale(12),
            marginTop:moderateScale(10)
          }}>
          Payment Via
        </Text>
        <Text
          style={{
            color: Color.black,
            marginLeft: moderateScale(12),
            marginTop: moderateScale(10),
          }}>
          Credit/Debit Card
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: moderateScale(10),
            marginTop:moderateScale(10)
          }}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            containerStyle={{}}
          />
          <View style={{marginRight:moderateScale(5)}}>
            <View>
            <MasterCardIcon />
            </View>
            <View style={{marginTop:moderateScale(14)}}>
            <VisaCardIcon />
            </View>
          </View>
        </View>

      </View>


      </ScrollView>
    </View>
  );
};

export default BookingWorkspaceScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
