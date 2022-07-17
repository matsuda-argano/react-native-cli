import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details, Home} from './screens';
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
          name="Details"
          component={Details}
          options={{title: '詳細'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
