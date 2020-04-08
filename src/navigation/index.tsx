import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Cart, Home } from '../screens';
import * as routes from '../navigation/routes';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator>
    <RootStack.Screen name={routes.HOME} component={Home} />
    <RootStack.Screen name={routes.CART} component={Cart} />
  </RootStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <RootStackScreen />
  </NavigationContainer>
);
