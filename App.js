// App.js
// Reference: Week 1 – Basic React Native structure with <View>, <StatusBar>, and custom components

import React from "react";
import { StatusBar } from "expo-status-bar"; // Week 1: Used in App.js
import { StyleSheet, View } from "react-native"; // Week 1: <View> used as root layout container

// Custom components with allowed tags
import HomeScreen from "./components/HomeScreen"; 
import TopNavBar from "./components/TopNavBar";

export default function App() {
  return (
    <View style={styles.container}> 
      {/* Week 1: Root container using <View>, styled with flex and padding */}
      
      <StatusBar style="light" /> 
      {/* Week 1: StatusBar used with "auto"; here "light" - docs: https://docs.expo.dev/versions/latest/sdk/status-bar/ */}

      <TopNavBar /> 
      {/* Custom Component - Valid: built using <View>, <Text>, <Image> as per assignment instructions*/}

      <HomeScreen /> 
      {/* Custom Component - as per assignment instructions */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Week 1 & 2: Used for layout expansion
    backgroundColor: "#000", // Custom styling allowed (Week 2 StyleComponent.js)
    paddingTop: 28, 
    //based on: https://reactnative.dev/docs/view#paddingtop
  },
});
