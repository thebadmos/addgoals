import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const SplashScreen = ({ setShowSplash }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, [setShowSplash]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/Images/goal.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.heroText}>
          <Text style={[styles.bottomHeroText, { textAlign: "center" }]}>
            Addgoal.com is a simple and effective {"\n"}
             to-do List application which {"\n"}
             helps you manage your task and time.
          </Text>
        </View>
      </View>

      <View style={styles.bottomText}>
        <Text style={styles.bottomTextContent}>Powered by</Text>
        <Text style={styles.bottomTextContent}>Addgoals.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  heroText: {
    marginTop: 10,
    alignItems: "center",
  },
  bottomText: {
    marginBottom: 20,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  bottomTextContent: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  bottomHeroText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  }
});

export default SplashScreen;
