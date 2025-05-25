// components/HomeScreen.js
// References:
// - Week 1: Usage of <ScrollView> for vertical layout
// - Week 2: Layout and padding with <View> containers (StyleComponent.js, LayoutDemo.js)
// - React Native Docs : Manual padding at bottom
import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

// Custom UI sections — composed of allowed components
import CategoryGrid from "./CategoryGrid";
import PlaylistGrid from "./PlaylistGrid";
import AudiobookSection from "./AudiobookSection";

const HomeScreen = () => {
  return (
    //  Week 1: <ScrollView> used to make the screen scrollable
    <ScrollView style={styles.scrollView}>
      
      {/* Week 2: Section layout using <View> with horizontal and vertical padding */}
      <View style={styles.section}>
        <CategoryGrid />
      </View>

      <View style={styles.section}>
        <PlaylistGrid />
      </View>

      <View style={styles.section}>
        <AudiobookSection />
      </View>

      {/* Padding added manually at bottom via empty View to simulate spacing */}
      <View style={styles.bottomPadding} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#000", // Week 2: Background styling applied to containers
  },
  section: {
    paddingHorizontal: 12, // Week 2: Padding and spacing (StyleComponent.js)
    paddingTop: 12,
  },
  bottomPadding: {
    height: 20, //  Manual padding 
  },
});

export default HomeScreen;
