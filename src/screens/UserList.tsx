import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {UserItem} from '../components';
import {User} from '../types';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json));
    };
    getUsers();
  }, []);

  return (
    <View style={styles.conatainer}>
      <FlatList data={users} renderItem={({item}) => <UserItem {...item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
});

export default UserList;
