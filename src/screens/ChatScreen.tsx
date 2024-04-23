import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import CustomInput from '../components/Input';

interface ChatScreenProps {}

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
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
