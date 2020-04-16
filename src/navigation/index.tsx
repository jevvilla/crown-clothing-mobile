import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Cart, Home, SignIn, SignUp } from '../screens';
import * as routes from '../navigation/routes';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator>
    <RootStack.Screen name={routes.HOME} component={Home} />
    <RootStack.Screen name={routes.CART} component={Cart} />
  </RootStack.Navigator>
);

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name={routes.SIGN_IN} component={SignIn} />
    <AuthStack.Screen name={routes.SIGN_UP} component={SignUp} />
  </AuthStack.Navigator>
);

export default () => (
  <NavigationContainer>
    {/* <RootStackScreen /> */}
    <AuthStackScreen />
  </NavigationContainer>
);
