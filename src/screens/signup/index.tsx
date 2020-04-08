import React from 'react';
import { View, Text, Button } from 'react-native';

import * as routes from '../../navigation/routes';

export const SignUp: React.FC = ({ navigation }) => {
  return (
    <View>
      <Text>SignUp screen</Text>
      <Button onPress={() => navigation.push(routes.SIGN_IN)} title="Click me" />
    </View>
  );
};
