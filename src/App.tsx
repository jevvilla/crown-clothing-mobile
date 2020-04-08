import React from 'react';
import { StatusBar } from 'react-native';

import Root from './navigation';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <Root />
    </>
  );
};

export default App;
