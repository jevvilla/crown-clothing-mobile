import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

type Props = {
  onPress: () => void;
  isGoogle?: boolean;
  title: string;
};

export const Button: React.FC<Props> = ({ isGoogle, title }) => {
  const buttonStyles = [styles.button, isGoogle ? styles.isGoogle : null];

  return (
    <TouchableOpacity onPress={() => {}} style={buttonStyles}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};
