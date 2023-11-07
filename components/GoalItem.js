import { StyleSheet, View, Text, Pressable } from "react-native";
import CheckBox from "react-native-check-box";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

function GoalItem(props) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.goalItem}>
      <View style={styles.rowContainer}>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <CheckBox
            onClick={toggleCheckBox}
            isChecked={isChecked}
            checkBoxColor="#1d349a"
          />
          <View>
            <Text
              style={[styles.goalText, isChecked ? styles.strikeThrough : null]}
            >
              {props.text}
            </Text>
            <Text style={[styles.goalDescription,  isChecked ? styles.strikeThrough : null]}>
              {" "}
              {props.description}
            </Text>
            <Text style={[styles.goalDatePicker,  isChecked ? styles.strikeThrough : null]}>
              {" "}
              {props.datePicker}
            </Text>
            <Text style={[styles.goalDatePicker,  isChecked ? styles.strikeThrough : null]}>
              {" "}
              {props.timePicker}
            </Text>
            <Text
              style={[
                styles.goalStatus,
                {
                  color: isChecked ? "green" : "red",
                  marginTop: 15,
                },
              ]}
            >
              {isChecked ? "Goal Completed" : "Not Completed"}
            </Text>
          </View>
        </View>
        <Pressable
          android_ripple={{ color: "#210644" }}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <MaterialIcons
            name="cancel"
            size={24}
            color="#1d349a"
            style={styles.cancelIcon}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: "#fff",
    shadowColor: "#1d349a",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#1d349a",
    padding: 8,
    fontSize: 20,
    fontFamily: "Inter_500Medium",
  },
  strikeThrough: {
    textDecorationLine: "line-through",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalStatus: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    marginLeft: 10,
  },
  goalDescription: {
    marginTop: 1,
    marginLeft: 6,
    color: "#1d349a",
    fontFamily: "Inter_500Medium",
    fontSize: 15,
    width: "60%", 
    flexWrap: "wrap",
  },
  goalDatePicker:{
    marginTop: 8,
    marginLeft: 6,
    color: "#1d349a",
    fontFamily: "Inter_500Medium",
    fontSize: 13,
  },
  cancelIcon: {
    marginRight: 8,
  },
});
