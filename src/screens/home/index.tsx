import React from 'react';
import { View, Text } from 'react-native';

import { Button } from '../../components';

export const Home: React.FC = ({ navigation }) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button />
    </View>
  );
};
