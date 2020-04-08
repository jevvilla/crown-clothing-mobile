import React from 'react';
import { View, Text, Button } from 'react-native';

import * as routes from '../../navigation/routes';

export const SignIn: React.FC = ({ navigation }) => {
  return (
    <View>
      <Text>SignIn screen</Text>
      <Button onPress={() => navigation.push(routes.SIGN_UP)} title="Click me" />
    </View>
  );
};
