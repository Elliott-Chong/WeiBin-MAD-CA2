// Consists of codes for Sign In, Sign Up & Bookmarks Page

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home";
import Login from "./src/Login";
import Signup from "./src/Signup";
import Bookmark from "./src/Bookmark";

const Stack = createNativeStackNavigator();

function App() {
  // Sign In & Sign Up Screens Code for app.js
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Bookmark" component={Bookmark} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
