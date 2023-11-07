import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Text,
  Image,
  Pressable,
} from "react-native";
import { useState } from "react";
import GoalItem from "../components/GoalItem";
import GoalInput from "../components/GoalInput";
import FooterMenu from "../components/Menu";
import { StatusBar } from "expo-status-bar";
import { TodayDate } from "../components/getDate";
import { AntDesign } from "@expo/vector-icons";

export default function AddGoals({ navigation }) {
  const menuItems = [
    { id: "1", title: "Home", icon: "home", screenName: "Home" },
    { id: "2", title: "Tasks", icon: "plus-square-o", screenName: "AddGoals" },
    { id: "3", title: "Category", icon: "tasks", screenName: "Category" },
    { id: "4", title: "Profile", icon: "user", screenName: "Profile" },
  ];
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const [showSplash, setShowSplash] = useState(true);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText, enteredDescriptionText, enteredDate, enteredTime) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
        description: enteredDescriptionText,
        datePicker: enteredDate,
        timePicker: enteredTime
      },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <View style={styles.homeContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.dateText}>
              <TodayDate />
            </View>
            <Image
              source={require("../assets/Images/avatar-user.png")}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.headerSub}>Here is your </Text>
          <Text style={styles.headerSub1}>Goal list!</Text>
        </View>

        <View style={styles.secondHomeContainer}>
          {courseGoals.length === 0 ? ( // Check if courseGoals is empty
            <Text style={styles.addGoalText}>Oops! No goals added</Text>
          ) : (
            <Text></Text>
          )}

          <GoalInput
            showModal={modalIsVisible}
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}
          />
          <View style={styles.goalsContainer}>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    text={itemData.item.text}
                    description={itemData.item.description}
                    datePicker={itemData.item.datePicker}
                    timePicker={itemData.item.timePicker}
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHandler}
                  />
                );
              }}
              alwaysBounceVertical={false}
            />
          </View>
          <View style={styles.plusIcon}>
            <Pressable activeOpacity={1} onPress={startAddGoalHandler}>
              <AntDesign name="pluscircle" size={60} color="#1d349a" />
            </Pressable>
          </View>
        </View>
        <FooterMenu
          menuItems={menuItems}
          activeScreen="AddGoals"
          navigation={navigation}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // paddingTop: 60,
    // paddingHorizontal: 16,
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
  dateText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Inter_400Regular",
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
  addGoalText: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 50,
    fontFamily: "Inter_900Black",
    color: "#1d349a",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  plusIcon: {
    marginBottom: 20,
    alignItems: "flex-end",
  },
  goalsContainer: {
    flex: 4,
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
});
