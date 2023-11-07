import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [enteredDescriptionText, setEnteredDescriptionText] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function enteredDescriptionHandler(enteredDescriptionText) {
    setEnteredDescriptionText(enteredDescriptionText);
  }
  function enteredDateHandler(enteredDate) {
    setEnteredDate(enteredDate);
  }
  function enteredTimeHandler(enteredTime) {
    setEnteredTime(enteredTime);
  }

  function addGoalHandler() {
    props.onAddGoal(
      enteredGoalText,
      enteredDescriptionText,
      enteredDate,
      enteredTime,
    );
    setEnteredGoalText("");
    setEnteredDescriptionText("");
    setEnteredDate(""),
    setEnteredTime("")
  }
  function onChangeDate(event, selectedDate) {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
      enteredDateHandler(selectedDate.toDateString());
    }
  }
  
  function onChangeTime(event, selectedDate) {
    setShowTimePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
      enteredTimeHandler(selectedDate.toLocaleTimeString());
    }
  }
  function showDatepicker() {
    setShowDatePicker(true);
  }
  function showTimepicker() {
    setShowTimePicker(true);
  }

  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/Images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your goal!"
          placeholderTextColor="#1d349a"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <TextInput
          style={{ ...styles.textInput, marginTop: 20 }}
          placeholder="Your goal description!"
          placeholderTextColor="#1d349a"
          onChangeText={enteredDescriptionHandler}
          value={enteredDescriptionText}
        />
        <TextInput
          style={{ ...styles.textInput, marginTop: 20 }}
          placeholder="Date"
          placeholderTextColor="#1d349a"
          onFocus={showDatepicker}
          value={enteredDate}
        />

        <TextInput
          style={{ ...styles.textInput, marginTop: 20 }}
          placeholder="Time"
          placeholderTextColor="#1d349a"
          onFocus={showTimepicker}
          value={enteredTime}
        />

        {showDatePicker && (
          <DateTimePicker
            mode="date"
            value={selectedDate}
            display="spinner"
            onChange={onChangeDate}
          />
        )}
        {showTimePicker && (
          <DateTimePicker
            mode="time"
            value={selectedDate}
            display="spinner"
            onChange={onChangeTime}
          />
        )}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancel}
              color="#f31282"
            ></Button>
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1d349a",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#1d349a",
    backgroundColor: "#fff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
