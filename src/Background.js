// Background for Sign In & Sign Up Pages

import React from 'react';
import {View, ImageBackground} from 'react-native';

const Background = ({ children }) => {
  return (
    <View >
      <View>
        {children}
      </View>
    </View>
  );
}

export default Background;
