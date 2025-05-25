// components/TopNavBar.js
// References:
// - Week 2 (SocialMediaPost.js): Use of Unicode symbols
// - Week 2 (LayoutDemo.js & StyleComponent.js): Flex layout, padding, margin, and font styling

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TopNavBar = () => {
  return (
    <View style={styles.navContainer}>
      {/* Week 2: Apple symbol rendered using a Unicode character in <Text>,
          inspired SocialMediaPost.js */}
      <View style={styles.appleWrapper}>
        <Text style={styles.appleSymbol}></Text>
      </View>

      {/* Week 2: Button-style navigation using View + Text styling */}
      <View style={styles.navItem}><Text style={styles.navText}>All</Text></View>
      <View style={styles.navItem}><Text style={styles.navText}>Music</Text></View>
      <View style={styles.navItem}><Text style={styles.navText}>Podcasts</Text></View>
      <View style={styles.navItem}><Text style={styles.navText}>Audiobooks</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",            // Week 2: Horizontal row layout
    justifyContent: "space-around", //  Week 2: Even spacing between elements
    alignItems: "center",           //  Week 2: Center content vertically
    flexWrap: "wrap",               //  Week 2: Allow wrapping on smaller screens
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: "black",
  },
  appleWrapper: {
    backgroundColor: "#0099ff",
    borderRadius: 25,               // Week 2: Rounded corners for buttons
    width: 40,
    height: 40,
    justifyContent: "center",       //Center text vertically
    alignItems: "center",           //Center text horizontally
  },
  appleSymbol: {
    color: "white",
    fontSize: 25,                   //Week 2: Font styling and sizing
    fontWeight: "bold",
    lineHeight: 40,                 // Used to vertically center the text inside fixed-height box- basic css prop
  },
  navItem: {
    backgroundColor: "#333",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 1,
    marginVertical: 5,
  },
  navText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",              //Week 2: Text styling for emphasis
  },
});

export default TopNavBar;
