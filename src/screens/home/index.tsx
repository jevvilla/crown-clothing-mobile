import React from 'react';
import { View, Text } from 'react-native';

import { Button } from '../../components';
import styles from './styles';

export const Home: React.FC = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Home screen</Text>
      <Button />
    </View>
  );
};
