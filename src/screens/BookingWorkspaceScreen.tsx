import React, {useState, useMemo} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
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
import NewCardIcon from '../components/Svgs/NewCardIcon';
import CorrectSignIcon from '../components/Svgs/CorrectSignIcon';
import MyBalanceIcon from '../components/Svgs/MyBalanceIcon';
import ApplePayIcon from '../components/Svgs/ApplePayIcon';
import GpayIcon from '../components/Svgs/GpayIcon';
import CorrectSignOutlineIcon from '../components/Svgs/CorrectSignOutlineIcon';

interface BookingWorkspaceScreenProps {}

const BookingWorkspaceScreen = (props: BookingWorkspaceScreenProps) => {
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [selectedWallet, setSelectedWallet] = useState<string | undefined>();
  const [selectGpay, setselectGpay] = useState<string | undefined>();

  // console.log(selectedId)

  // radio 1 part
  const AddNewCard = () => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', width: '70%', marginRight: 12}}>
        <View style={{marginLeft: moderateScale(10)}}>
          <NewCardIcon size={36} color={Color.darkBlue} />
        </View>
        <Text
          style={{
            marginLeft: moderateScale(10),
            marginTop: moderateScale(10),
            fontWeight: '500',
            fontSize: moderateScale(15),
          }}>
          Add New Card
        </Text>
      </TouchableOpacity>
    );
  };

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: 'Master_card', // acts as primary key, should be unique and non-empty string
        label: 'xxxx xxxx xxxx 9370',
      },
      {
        id: 'Visa',
        label: 'xxxx xxxx xxxx 2367',
      },
      {
        id: 'ADD_NEW_CARD',
        label: <AddNewCard />,
      },
    ],
    [],
  );
  // radio 1 part ends here

  const MyBalanceComponent = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{marginLeft: moderateScale(10)}}>
          <MyBalanceIcon color={Color.primary} size={25} />
        </View>
        <Text style={{fontWeight: 'bold', marginHorizontal: moderateScale(5)}}>
          My Balance
        </Text>
        <Text style={{color: Color.primary}}>- $ 434 Available</Text>
      </View>
    );
  };

  const ApplePayComponent = () => {
    return (
      <View
        style={{
          marginRight: moderateScale(155),
          marginHorizontal: moderateScale(10),
        }}>
        <ApplePayIcon color={Color.black} size={52} />
      </View>
    );
  };

  const radioButtons2: RadioButtonProps[] = useMemo(
    () => [
      {
        id: 'My_Balance',
        label: <MyBalanceComponent />,
      },
      {
        id: 'APPLE_PAY',
        label: <ApplePayComponent />,
      },
    ],
    [],
  );

  const GpayComponent = () => {
    return (
      <View style={{marginLeft: moderateScale(10)}}>
        <GpayIcon />
      </View>
    );
  };

  const radioButtons3: RadioButtonProps[] = useMemo(
    () => [
      {
        id: 'G_PAY',
        label: <GpayComponent />,
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
      paymentOption: '',
      email: '',
      newCard: '',
      expiryDate: '',
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView style={{backgroundColor:Color.white}}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: moderateScale(15),
            marginTop: moderateScale(10),
            backgroundColor:Color.white
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
          <View
            style={{marginLeft: moderateScale(10), justifyContent: 'center'}}>
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
            marginHorizontal: moderateScale(5),
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
          <View style={{position: 'absolute', left: 276, bottom: -5}}>
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
              marginLeft: moderateScale(15),
              color: Color.black,
              marginBottom: moderateScale(5),
              marginTop: moderateScale(10),
            }}>
            Invite Others
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 5,
            }}>
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
                height: 42,
                paddingHorizontal: moderateScale(10),
                paddingVertical: moderateScale(5),
                borderRadius: 5,
              }}>
              <View style={{marginTop: moderateScale(4)}}>
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
              marginLeft: moderateScale(15),
              marginTop: moderateScale(10),
            }}>
            Payment Summary
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: moderateScale(10),
              marginHorizontal: moderateScale(15),
              justifyContent: 'space-between',
            }}>
            <Text style={{color: Color.black}}>Price 1</Text>
            <Text style={{color: Color.primary}}>$ 25.00</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: moderateScale(5),
              marginHorizontal: moderateScale(15),
              justifyContent: 'space-between',
            }}>
            <Text style={{color: Color.black}}>Tax (10%)</Text>
            <Text style={{color: Color.primary}}>$ 2.50</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: moderateScale(15),
              marginHorizontal: moderateScale(15),
              justifyContent: 'space-between',
            }}>
            <Text style={{color: Color.black}}>Total</Text>
            <Text style={{color: Color.primary}}>$ 27.50</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: Color.white,
          }}>
          <Text
            style={{
              fontWeight: '600',
              color: Color.darkBlue,
              marginLeft: moderateScale(15),
              marginTop: moderateScale(10),
            }}>
            Payment Via
          </Text>
          <Text
            style={{
              color: Color.black,
              marginLeft: moderateScale(15),
              marginTop: moderateScale(10),
            }}>
            Credit/Debit Card
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginHorizontal: moderateScale(10),
              marginTop: moderateScale(10),

              marginRight: moderateScale(50),
            }}>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={id => setSelectedId(id)}
              selectedId={selectedId}
              containerStyle={{marginRight: moderateScale(85)}}
            />
            <View style={{marginRight: moderateScale(0)}}>
              <View style={{marginLeft: moderateScale(17)}}>
                <MasterCardIcon />
              </View>
              <View
                style={{
                  marginTop: moderateScale(14),
                  marginLeft: moderateScale(12),
                }}>
                <VisaCardIcon />
              </View>
            </View>
          </View>

          {/* card component */}
          <View
            style={{
              marginHorizontal: moderateScale(20),
              backgroundColor: Color.lightGrey,
              borderRadius:10
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: moderateScale(1),
                borderBottomWidth:2,
                borderBottomColor:Color.mapColor
              }}>
              <Text
                style={{
                  marginLeft: moderateScale(10),
                  marginTop: moderateScale(10),
                }}>
                Card Number
              </Text>
              <Controller
                name="newCard"
                control={control}
                render={({field: {value, onChange}}) => (
                  <TextInput
                    placeholder="XXXX XXXX XXXX XXXX"
                    value={value}
                    onChangeText={onChange}
                    style={{width: '60%', marginHorizontal: moderateScale(10)}}
                  />
                )}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: moderateScale(1),
              }}>
                <View style={{borderRightWidth:2, borderRightColor:Color.mapColor,
                  flexDirection:"row"
                }}>
              <Text
                style={{
                  marginLeft: moderateScale(10),
                  marginTop: moderateScale(10),
                }}>
                Expiry Date
              </Text>
              <Controller
                name="expiryDate"
                control={control}
                render={({field: {value, onChange}}) => (
                  <TextInput
                    placeholder="DD/MM"
                    value={value}
                    onChangeText={onChange}
                    style={{
                      marginHorizontal: moderateScale(10),
                    }}
                  />
                )}
              />
              </View>
              <Text
                style={{
                  marginLeft: moderateScale(10),
                  marginTop: moderateScale(10),
                }}>
                CVV
              </Text>
              <Controller
                name="expiryDate"
                control={control}
                render={({field: {value, onChange}}) => (
                  <TextInput
                    placeholder="0000"
                    value={value}
                    onChangeText={onChange}
                    style={{
                      marginHorizontal: moderateScale(10),
                    }}
                  />
                )}
              />
            </View>
          </View>
          {/* card component */}
          <View style={{flexDirection: 'row',
              marginTop: moderateScale(10),
              marginLeft: moderateScale(170),
              marginHorizontal:moderateScale(1)
              }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor:Color.primary
            }}>
            <CorrectSignOutlineIcon color={Color.whiteSecondary} size={18} />
          </TouchableOpacity>
            <Text style={{marginLeft: moderateScale(5), fontWeight: '400'}}>
              Save this card for later
            </Text>
              </View>

          <Text
            style={{
              fontSize: moderateScale(15),
              marginLeft: moderateScale(20),
              marginVertical: moderateScale(10),
            }}>
            Wallet
          </Text>
          <RadioGroup
            radioButtons={radioButtons2}
            onPress={setSelectedWallet}
            selectedId={selectedWallet}
            containerStyle={{marginRight: moderateScale(70)}}
          />

          <View style={{marginBottom: 200}}>
            <Text
              style={{
                fontSize: moderateScale(15),
                marginLeft: moderateScale(20),
                marginVertical: moderateScale(10),
              }}>
              UPI
            </Text>
            <RadioGroup
              radioButtons={radioButtons3}
              onPress={setselectGpay}
              selectedId={selectGpay}
              containerStyle={{marginRight: moderateScale(220)}}
            />
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
