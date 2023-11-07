import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const goToSignup = () => {
    navigation.navigate("Signup");
  };
  const goToHome = () => {
    navigation.navigate("Home");
  };

  const ButtonComponent = Platform.select({
    ios: () => (
      <Pressable style={styles.buttonIOS} onPress={goToHome}>
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
    ),
    android: () => (
      <Pressable style={styles.buttonAndroid} onPress={goToHome}>
        <Text style={styles.buttonText}>Log in</Text>
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
  const FacebookIcon = () => {
    return (
      <View style={styles.iconBox}>
        <FontAwesome name="facebook" size={30} style={{ color: '#2230A6' }} />
      </View>
    );
  };
  const TwitterIcon = () => {
    return (
      <View style={styles.iconBox}>
       <FontAwesome name="twitter" size={30} style={{color: '#1DA1F2'}} />
      </View>
    );
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.logoText}>Addgoals.com</Text>

      <View>
        <Text style={styles.subText}>Login to your Account</Text>
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
      </View>
      {/* Button components */}
      <ButtonComponent />
      <View style={styles.signUpContainer}>
        <Text style={styles.bottomTextContent}> - Or sign up with -</Text>
      </View>
      <View style={styles.iconContainer}>
       
        <GoogleIcon />
        <FacebookIcon />
        <TwitterIcon />
      </View>
      <View style={styles.bottomText}>
        <Text style={styles.bottomTextContent}>
          Don't have an account?{" "}
          <Text style={{ color: "#1d349a" }} onPress={goToSignup}>
            Sign up
          </Text>
        </Text>
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
    marginTop: 80,
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  iconBox: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10,
    width: 80,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,
    elevation: 4,
  },
  signUpContainer: {
    marginTop: 50,
    alignItems: "center",
    
  }
});

export default LoginScreen;
