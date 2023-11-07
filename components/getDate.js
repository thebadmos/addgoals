import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodayDate = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const suffix = () => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const dateSuffix = suffix();

  return (
    <Text style={styles.customStyle}>
      {month} {day}
      {dateSuffix}, {year}
    </Text>
  );
};

const Greet = ({ user }) => {
  const currentTime = new Date().getHours();
  let greeting = 'Good Evening';


  if (currentTime < 12) {
    greeting = 'Good Morning';
  } else if (currentTime < 18) {
    greeting = 'Good Afternoon';
  }

  return (
    <View style={styles.customStyle}>
      <Text style={styles.greetingText}>{greeting}, Olamiji</Text>
      {/* <Text style={styles.blueText}>Ola</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  customStyle: {
    color: "#e1e1e1",
    fontSize: 15,
    fontFamily: "Inter_400Regular",
  },
  greetingText: {
    color: "#e1e1e1",
    fontSize: 22,
    fontFamily: "Inter_400Regular",
  },
  blueText: {
    color: 'blue',
  },
});

export { TodayDate, Greet };
