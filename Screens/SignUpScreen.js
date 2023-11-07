import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Platform,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';


const SignupScreen = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate("Login");
  };
  const addGoals = () => {
    navigation.navigate("AddGoals");
  };

  const ButtonComponent = Platform.select({
    ios: () => (
      <Pressable style={styles.buttonIOS} onPress={addGoals}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
    ),
    android: () => (
      <Pressable style={styles.buttonAndroid} onPress={addGoals}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
    ),
  });
  
  const GoogleIcon = () => {
    return (
      <View style={styles.iconBox}>
      <FontAwesome name="google" size={30} color="red" />
      </View>
    );
  };
  const FacebookIcon = () =>{
    return (
      <View style={styles.iconBox}>
      <FontAwesome name="facebook" size={30} style={{ color: '#2230A6' }} />
    </View>
    );
  };
  const TwitterIcon = () =>{
    return (
      <View style={styles.iconBox}>
      <FontAwesome name="twitter" size={30} style={{color: '#1DA1F2'}} />
      </View>
    );
  }

  return (
    <View style={styles.appContainer}>
      <Pressable onPress={goToLogin} style={styles.backButton}>
        <Text style={styles.backText}>{'< Back'}</Text>
      </Pressable>
      <Text style={styles.logoText}>Addgoals.com</Text>
  
      <View>
        <Text style={styles.subText}>Create your Account</Text>
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            placeholderTextColor="#000"
          />
        </View>
      </View>
      {/* Button components */}
      <ButtonComponent />
      <View style={styles.bottomText}>
        <Text style={styles.bottomTextContent}>
         - Or sign up with -
          {/* <Text style={{ color: "#1d349a" }} onPress={goToLogin}>
            Sign up
          </Text> */}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <GoogleIcon />
        <FacebookIcon/>
        <TwitterIcon/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  backButton: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 16,
    color: "blue",
  },
  logoText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 45,
    color: "#1d349a",
    fontFamily: "Inter_900Black",
  },
  subText: {
    marginTop: 70,
    fontSize: 20,
    fontFamily: "Inter_500Medium",
  },
  textInput: {
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  textInputWrapper: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginBottom: 5,
    shadowColor: "#1d349a",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonIOS: {
    backgroundColor: "#1d349a",
    padding: 18,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonAndroid: {
    backgroundColor: "#1d349a",
    padding: 18,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  bottomTextContent: {
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Inter_400Regular",
  },
  bottomText: {
    marginTop: 50,
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20, 
  },
  iconBox: {
    backgroundColor: '#fff',
    alignItems: "center",
    borderRadius: 10,
    width: 80,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,
    elevation: 4,
  },
});

export default SignupScreen;
