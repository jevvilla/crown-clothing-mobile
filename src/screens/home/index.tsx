import React from 'react';
import { View, Text, Button } from 'react-native';

import * as routes from '../../navigation/routes';

export const Home: React.FC = ({ navigation }) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button onPress={() => navigation.push(routes.CART)} title="Click me" />
    </View>
  );
};
