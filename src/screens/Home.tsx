import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavProp} from '../types';

const Home: React.FC = () => {
  const navigation = useNavigation<RootStackNavProp<'Home'>>();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="詳細へ"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
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
