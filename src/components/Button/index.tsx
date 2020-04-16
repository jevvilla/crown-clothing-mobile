import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

type Props = {
  isGoogle?: boolean;
  inverted?: boolean;
};

export const Button: React.FC<Props> = ({ isGoogle, inverted }) => {
  const buttonStyles = [
    styles.button,
    isGoogle ? styles.isGoogle : null,
    inverted ? styles.inverted : null,
  ];

  return (
    <TouchableOpacity onPress={() => {}} style={buttonStyles}>
      <Text style={styles.buttonTitle}>Sign In</Text>
    </TouchableOpacity>
  );
};
