import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignUpScreen";
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./Screens/HomeScreen";
import AddGoals from "./Screens/AddGoals";
import Category from "./Screens/Category";
import Profile from "./Screens/Profile";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_800ExtraBold,
  Inter_900Black,
  Inter_300Light,
} from "@expo-google-fonts/inter";

const Stack = createStackNavigator();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_800ExtraBold,
    Inter_900Black,
    Inter_300Light
  });

  if (!fontsLoaded) {
    return (
      <>
        <StatusBar style="light" />
        <SplashScreen setShowSplash={setShowSplash} />
       
      </>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      {showSplash ? (
        <SplashScreen setShowSplash={setShowSplash} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
           
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="AddGoals" component={AddGoals}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Category" component={Category}/>
          </Stack.Navigator>
        </NavigationContainer>
      )} 
    </>
  );
};

export default App;
