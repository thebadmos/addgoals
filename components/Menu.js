import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Menu = ({ menuItems, activeScreen }) => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.footer}>
      {menuItems.map((item, index) => (
        <Pressable
          style={[
            styles.menuItem,
            activeScreen === item.screenName ? styles.activeItem : null,
          ]}
          key={index}
          onPress={() => handleNavigation(item.screenName)}
        >
          <FontAwesome
            name={item.icon}
            size={20}
            color={activeScreen === item.screenName ? "#1d349a" : "#000"}
          />

          <Text
            style={{
              ...styles.menuText,
              color: activeScreen === item.screenName ? "#1d349a" : "#000",
            }}
          >
            {item.title}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#fff",
    paddingVertical: 30,
    marginBottom: -20,
    height: 80,
    shadowColor: "#1d349a",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  menuItem: {
    flex: 1,
    alignItems: "center",
  },
  menuText: {
    color: "#000",
    fontSize: 13,
    fontFamily: "Inter_400Regular",
  },

});

export default Menu;
