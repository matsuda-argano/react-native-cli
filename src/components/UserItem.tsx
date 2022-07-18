import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RootStackNavProp, User} from '../types';

const UserItem = (user: User) => {
  const navigation = useNavigation<RootStackNavProp<'UserList'>>();

  const handlePress = () => {
    navigation.navigate('UserDetail', {id: user.id});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#666',
    backgroundColor: '#fff',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingBottom: 5,
  },
});

export default UserItem;
