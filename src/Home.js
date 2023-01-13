// First screen to toggle between Sign in & Sign Up pages

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { white, red } from './Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 23, marginVertical: 100 }}>
      <Btn bgColor={red} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='black' textColor={white} btnLabel="Sign-up" Press={() => props.navigation.navigate("Signup")} />
      </View>
    </Background>
  );
}



export default Home;
