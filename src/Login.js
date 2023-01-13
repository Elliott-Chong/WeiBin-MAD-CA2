// Sign In or Login Page

import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import { red } from "./Constants";
import Field from "./Field";

const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 360 }}>
        <View
          style={{
            backgroundColor: "white",
            height: 900,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 200, height: 200, position: "relative" }}
            source={require("../assets/SP.jpg")}
          />
          <Text
            style={{
              fontSize: 40,
              color: red,
              fontWeight: "bold",
              paddingLeft: 30,
            }}
          >
            Welcome Back!
          </Text>

          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              // marginBottom: 5,
              paddingLeft: 40,
            }}
          >
            Login to your account
          </Text>

          <View
            style={{
              alignItems: "center",
              fontSize: 16,
              fontWeight: "bold",
              width: "90%",
              paddingLeft: 38,
            }}
          >
            <Field
              style={{ fontSize: 150 }}
              placeholder="Admission Number"
              keyboardType={"number"}
            />

            <Field placeholder="Password" secureTextEntry={true} />
          </View>

          <View
            style={{ alignItems: "flex-end", width: "78%", marginBottom: 50 }}
          >
            <Text style={{ color: red, fontWeight: "bold", fontSize: 16 }}>
              Forgot Password?
            </Text>
          </View>

          <Btn
            login
            textColor="white"
            bgColor={red}
            btnLabel="Login"
            Press={() => props.navigation.navigate("Bookmark")}
          />
        </View>
      </View>
    </Background>
  );
};

export default Login;
