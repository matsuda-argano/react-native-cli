import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavProp} from '../types';

const Home: React.FC = () => {
  const navigation = useNavigation<RootStackNavProp<'Home'>>();
  return (
    <View style={styles.container}>
      <Button
        title="ユーザー一覧"
        onPress={() => {
          navigation.navigate('UserList');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
