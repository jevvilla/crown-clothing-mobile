import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { Button } from '../../components';
import * as routes from '../../navigation/routes';

import styles from './styles';

export const SignIn: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>I already have an account</Text>
      <Text style={styles.subtitle}>Sign in with your email and password</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button onPress={() => navigation.navigate(routes.SIGN_UP)} title="SIGN IN" />
      <Button
        onPress={() => navigation.push(routes.SIGN_UP)}
        isGoogle
        title="SIGN IN WITH GOOGLE"
      />
    </View>
  );
};
