// components/AudiobookSection.js
// References:
// - Week 1: Mapping with .map() (DisplayImage.js)
// - Week 2: Flexbox layout, padding, percentage-based width (LayoutDemo.js, StyleComponent.js)

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const audiobooks = [
  {
    title: "Mastering Conversation",
    author: "Helen Stone",
    image: require("../assets/audio1.png"),
  },
  {
    title: "Control your mind and...",
    author: "Eric Robertson",
    image: require("../assets/audio1.png"),
  },
  {
    title: "Ikigai: The japanese secret...",
    author: "Hector Garcia",
    image: require("../assets/audio1.png"),
  },
];

const AudiobookSection = () => {
  return (
    <View style={styles.container}>
      {/* Week 2: Section heading styled with padding and font styles */}
      <Text style={styles.heading}>Audiobooks for you</Text>

      {/* Week 2: Flexbox row with wrapping and spacing */}
      <View style={styles.grid}>
        {audiobooks.map((item, index) => (
          <View key={index} style={styles.card}>
            {/* Week 1 & 2: Image usage */}
            <Image source={item.image} style={styles.image} />

            <View style={styles.metaContainer}>
              {/* Week 2: Horizontal layout inside card */}
              <View style={styles.textRow}>
                <Text style={styles.included}>Included in Premium</Text>
                <Text style={styles.iconText}>♥</Text> {/* Unicode heart */}
              </View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12, // Week 2: Horizontal padding
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    // Week 2: Text styling techniques from StyleComponent.js
  },
  grid: {
    flexDirection: "row",         // Week 2: Flex row layout
    flexWrap: "wrap",             // Week 2: Allow multiple lines
    justifyContent: "space-between", // Week 2: Align items with spacing
  },
  card: {
    width: "48%",                 // Percentage-based layout taught in Week 2
    backgroundColor: "#000",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",           // Clip children (like Image) to border radius
  },
  image: {
    width: "100%",
    height: 120,
    },
  metaContainer: {
    backgroundColor: "#333",
    padding: 8,
  },
  textRow: {
    flexDirection: "row",             // Week 2: Horizontal layout
    justifyContent: "space-between",  // Space between text and heart icon
    alignItems: "center",
  },
  included: {
    color: "#00ff00",
    fontWeight: "500",
    fontSize: 14,
  },
  iconText: {
    color: "white",
    fontSize: 16,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 4,
  },
  author: {
    color: "#ccc",
    fontSize: 13,
  },
});

export default AudiobookSection;
