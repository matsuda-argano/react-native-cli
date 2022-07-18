import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList, User} from '../types';

const UserDetail = () => {
  const [user, setUser] = useState<User>();
  const route = useRoute<RouteProp<RootStackParamList, 'UserDetail'>>();

  useEffect(() => {
    const getUser = () => {
      fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(response => response.json())
        .then(json => setUser(json));
    };
    getUser();
  }, [route.params.id]);

  return (
    <View style={styles.container}>
      {!user ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <View>
          <Text style={styles.userInfo}>id: {user.id}</Text>
          <Text style={styles.userInfo}>name: {user.name}</Text>
          <Text style={styles.userInfo}>username: {user.username}</Text>
          <Text style={styles.userInfo}>email: {user.email}</Text>
          <Text style={styles.userInfo}>phone: {user.phone}</Text>
          <Text style={styles.userInfo}>website: {user.website}</Text>
          <Text style={styles.userInfo}>
            address: {user.address.street}, {user.address.suite},{' '}
            {user.address.city}
          </Text>
          <Text style={styles.userInfo}>company: {user.company.name}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  loading: {
    fontSize: 28,
  },
  userInfo: {
    fontSize: 20,
    paddingBottom: 10,
  },
});

export default UserDetail;
