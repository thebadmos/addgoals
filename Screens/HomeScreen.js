import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import FooterMenu from "../components/Menu";
import { TodayDate, Greet } from "../components/getDate";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  // menuItems
  const menuItems = [
    { id: "1", title: "Home", icon: "home", screenName: "Home" },
    { id: "2", title: "Tasks", icon: "plus-square-o", screenName: "AddGoals" },
    { id: "3", title: "Category", icon: "tasks", screenName: "Category" },
    { id: "4", title: "Profile", icon: "user", screenName: "Profile" },
  ];

  // goalCategories
  const goalCategories = [
    { name: "Work", color: "#ffdb58", icon: "category" },
    { name: "Personal", color: "#ff7f50", icon: "category" },
    { name: "Health", color: "#20b2aa", icon: "category" },
    { name: "Education", color: "#6495ed", icon: "category" },
    { name: "Hobbies", color: "#FF69B4", icon: "category" },
    { name: "Projects", color: "#FF8C00", icon: "category" },
  ];

  //schedules
  const goalSchedules = [
    { name: "Read Physics", color: "#8086ff", sub: "World Regional" },
    { name: "Clean Kitchen", color: "#ff7f50", sub: "Very Important" },
    { name: "New Articles", color: "#6495ed", sub: "Technical Writing" },
    { name: "Hobbies", color: "#FF69B4", sub: "Hobbies" },
  ];

  return (
    <View style={styles.appContainer}>
      <View style={styles.homeContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.dateText}>
            <TodayDate />
            <Greet user="Ola" />
          </View>
          <Image
            source={require("../assets/Images/avatar-user.png")}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.headerSub}>You've got</Text>
        <Text style={styles.headerSub1}>4 tasks today!</Text>
      </View>

      <View style={styles.secondHomeContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View>
            <Text
              style={{
                ...styles.headerSub,
                color: "black",
                fontSize: 25,
                fontFamily: "Inter_500Medium",
              }}
            >
              Categories
            </Text>
            <Text style={styles.secondSub}>Your created goal categories</Text>
          </View>
          {/* scrollView */}
          <View>
            <ScrollView horizontal={true} style={styles.scrollView}>
              {goalCategories.map((category, index) => (
                <View
                  key={index}
                  style={[styles.category, { backgroundColor: category.color }]}
                >
                  <MaterialIcons name={category.icon} size={50} color="#fff" />
                  <Text style={styles.categoryText}>{category.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
          {/* your schedules */}
          <View>
            <Text
              style={{
                ...styles.headerSub,
                color: "black",
                fontSize: 25,
                fontFamily: "Inter_500Medium",
              }}
            >
              Your Schedule
            </Text>
            <Text style={styles.secondSub}>Upcoming schedules</Text>
           {/* schedules list */}
            <FlatList
              data={goalSchedules}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View
                  key={index}
                  style={[styles.schedules, { backgroundColor: item.color }]}
                >
                  <View style={styles.headerContainer}>
                    <Text style={styles.schedulesText}>
                      {item.name} {"\n"}
                      <Text style={styles.schedulesSubText}>{item.sub}</Text>
                    </Text>

                    <MaterialCommunityIcons
                      name="dots-vertical"
                      size={24}
                      style={styles.profileImage1}
                      color="white"
                    />
                  </View>
                  <View style={{ ...styles.schedulesText, marginTop: 0 }}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <MaterialCommunityIcons
                        name="clock-outline"
                        size={20}
                        color="white"
                      />
                      <Text style={styles.iconText}>09:30am</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
                    >
                      <Ionicons name="ios-calendar" size={20} color="white" />
                      <Text style={styles.iconText}><TodayDate /></Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>

      <FooterMenu
        menuItems={menuItems}
        activeScreen="Home"
        navigation={navigation}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  homeContainer: {
    backgroundColor: "#1d349a",
    paddingTop: 80,
    paddingHorizontal: 16,
    height: 250,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerSub: {
    color: "#e1e1e1",
    fontSize: 30,
    fontFamily: "Inter_400Regular",
    marginTop: 20,
  },
  headerSub1: {
    color: "#e1e1e1",
    fontSize: 35,
    fontFamily: "Inter_800ExtraBold",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  profileImage1: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginTop: 30,
  },
  dateText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Inter_400Regular",
  },
  secondHomeContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 16,
    marginTop: -10,
    flex: 1,
    paddingBottom: 80,
  },
  secondSub: {
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Inter_400Regular",
    marginTop: 5,
  },
  scrollViewContainer: {
    flex: 1,
    marginTop: 10,
  },
  scrollView: {
    flexDirection: "row",
  },
  category: {
    height: 150,
    width: 150,
    borderRadius: 15,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0,
  },
  categoryText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  schedules: {
    height: 150,
    width: "100%",
    borderRadius: 15,
    margin: 10,
    // justifyContent: "center",
    // alignItems: "center",
    marginLeft: 0,
  },
  schedulesText: {
    marginTop: 10,
    marginLeft: 20,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  schedulesSubText: {
    fontSize: 15,
  },
  iconText: {
    color: "#e1e1e1",
    fontSize: 15,
    marginLeft: 5, // Adjust the value for your desired left margin
  },
});
