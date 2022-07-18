import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, UserDetail, UserList} from './screens';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'ホーム'}}
        />
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={{title: 'ユーザー一覧'}}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={{title: 'ユーザー詳細'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
