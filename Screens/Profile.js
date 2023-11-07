import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import FooterMenu from "../components/Menu"

const Profile = ({ navigation }) => {
  const menuItems = [
    { id: '1', title: 'Home', icon: 'home', screenName: 'Home'},
    { id: '2', title: 'Tasks', icon: 'plus-square-o',screenName: 'AddGoals' },
    { id: '3', title: 'Category', icon: 'tasks',screenName: 'Category' },
    { id: '4', title: 'Profile', icon: 'user',screenName: 'Profile' },
  ];

  return (
    <View style={styles.appContainer}>
      <Text>hello profile </Text>
      <FooterMenu menuItems={menuItems} activeScreen="Profile" navigation={navigation} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
})