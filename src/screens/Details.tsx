import {useNavigation, useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackNavProp, RootStackParamList} from '../types';

const Details = () => {
  const navigation = useNavigation<RootStackNavProp<'Details'>>();
  const route: RouteProp<RootStackParamList, 'Details'> = useRoute();
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>{JSON.stringify(route.params.itemId)}</Text>
      <Text>{JSON.stringify(route.params.otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => {
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          });
        }}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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

export default Details;
