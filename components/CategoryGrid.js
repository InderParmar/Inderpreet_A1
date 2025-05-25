// components/CategoryGrid.js
// References:
// - Week 1: Array mapping and <Image> component usage (DisplayImage.js)
// - Week 2: Flexbox layout, padding, text styling, and alignment (LayoutDemo.js, StyleComponent.js)

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// Static list of music categories (array defined similar to Week 1)
const categories = [
  "Hot Hits Canada",
  "Pop Favourites",
  "Hip-Hop Central",
  "80s Hard Rock",
  "All About Country",
  "Upbeat mix",
  "Daily Wellness",
  "Release Radar",
];

const CategoryGrid = () => {
  return (
    <View style={styles.wrapper}>
      {/* Week 2: Text styling for section headers (StyleComponent.js) */}
      <Text style={styles.heading}>Categories</Text>

      {/* Week 2: Flexbox layout for wrapping grid items (LayoutDemo.js) */}
      <View style={styles.container}>
        {/* Week 1: Array mapping pattern used to render each item (DisplayImage.js) */}
        {categories.map((item, index) => (
          <View key={index} style={styles.card}>
            {/* Week 1: Image rendering using <Image> (DisplayImage.js) */}
            <Image
              source={require("../assets/music.png")}
              style={styles.icon}
            />
            
            {/* Week 2: Basic text styling with manual truncation (substring) to avoid long overflow */}
            <Text style={styles.text}>
              {item.length > 15 ? item.substring(0, 15) + "..." : item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 12, // Week 2: Padding around sections (StyleComponent.js)
    marginBottom: 10,      // Week 2: Section spacing
  },
  heading: {
    color: "white",        
    fontSize: 20,          
    fontWeight: "bold",   
    marginBottom: 10,      // Week 2: Spacing below heading
  },
  container: {
    flexDirection: "row",           
    flexWrap: "wrap",               // Week 2: Allow wrapping items into new rows
    justifyContent: "space-between",
  },
  card: {
    flexDirection: "row",   
    alignItems: "center",   // Week 2: Vertical centering
    backgroundColor: "#444",
    padding: 10,            
    borderRadius: 10,       
    width: "48%",           // Week 2: Two cards per row using percentage width
    marginBottom: 15,       // Week 2: Bottom spacing
  },
  icon: {
    width: 20,              
    height: 20,             
    marginRight: 10,        // Week 2: Margin between icon and text
  },
  text: {
    color: "white",         
    fontSize: 16,           
  },
});

export default CategoryGrid;
