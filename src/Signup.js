// Sign Up Page

import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import Field from './Field';
import { red, darkBlue } from './Constants';

const Signup = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 360}}>

        <Text
          style={{
            color: 'black',
            fontSize: 44,
            width: 300,
            fontWeight: 'bold',
            marginTop: 20,
            paddingTop: 150,
            paddingLeft: 85
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 19,
            fontWeight: 'medium',
            marginBottom: 20,
            paddingLeft: 40
          }}>
          Create a new account
        </Text>
        
        <View
          style={{
            backgroundColor: 'grey',
            height: 700,
            width: 460,
            paddingTop: 50,
            alignItems: 'center',
            paddingLeft: 40
          }}>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="iChat Email"
            keyboardType={'email-address'}
          />
          <Field placeholder="Contact Number" keyboardType={'number'} />
          <Field placeholder="Admission Number" secureTextEntry={true} />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
          
            <Text style={{color: darkBlue, fontWeight: 'bold', fontSize: 15, paddingLeft: 90 }}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: darkBlue, fontWeight: 'bold', fontSize: 16, paddingRight: 20}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={red}
            btnLabel="Sign up"
            Press={() => {
              alert('Accoutn created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', paddingRight: 35}}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: red, fontWeight: 'bold', fontSize: 16, paddingLeft: 50}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
