// components/PlaylistGrid.js
// References:
// - Week 1: Mapping arrays with `.map()` as seen in DisplayImage.js
// - Week 2: Flexbox layout techniques (flexDirection, wrap, justifyContent) from LayoutDemo.js
// - Week 2: Use of <ImageBackground> for overlay content in SocialMediaPost.js
// - Docs: ImageBackground (https://reactnative.dev/docs/imagebackground)

import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const playlists = [
  {
    title: "Pop mix",
    subtitle: "Playlist • User 1",
    image: require("../assets/playlist4.png"),
  },
  {
    title: "Hot Hits",
    subtitle: "Playlist • User 1",
    image: require("../assets/playlist5.png"),
  },
  {
    title: "Upbeat Mix",
    subtitle: "Playlist • User 1",
    image: require("../assets/playlist6.png"),
  },
  {
    title: "Daily Well...",
    subtitle: "Playlist • User 1",
    image: require("../assets/playlist1.png"),
  },
  {
    title: "Hip-Hop C...",
    subtitle: "Playlist • User 1",
    image: require("../assets/playlist2.png"),
  },
  {
    title: "80s Hard...",
    subtitle: "Playlist • User 1",
    image: require("../assets/playlist3.png"),
  },
];

const PlaylistGrid = () => {
  return (
    <View style={styles.section}>
      {/* Week 2: Container with padding and vertical margin */}
      <Text style={styles.heading}>Recents</Text>

      <View style={styles.grid}>
        {/* Week 1: .map() used to render UI from array */}
        {playlists.map((item, index) => (
          <View key={index} style={styles.card}>
            {/* Week 2: ImageBackground usage with overlay, as taught in SocialMediaPost.js */}
            <ImageBackground 
              source={item.image} 
              style={styles.image}
              imageStyle={{ borderRadius: 10 }} // image customization
            >
              {/* Week 2: Overlay top bar for title */}
              <View style={styles.overlayTop}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              {/* Week 2: Overlay bottom bar for subtitle */}
              <View style={styles.overlayBottom}>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
            </ImageBackground>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 12,
    paddingTop: 10,
    // Week 2: Layout padding for section containers (StyleComponent.js, LayoutDemo.js)
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    // Week 2: Styled <Text> element (StyleComponent.js)
  },
  grid: {
    flexDirection: "row",         // Week 2: Horizontal layout of items
    flexWrap: "wrap",             // Week 2: Wrap to next row
    justifyContent: "space-between", // Week 2: Even spacing across row
  },
  card: {
    width: "30%",                 // Custom width for grid layout (approx. 3 per row)
    height: 120,                  // Fixed height for uniform cards
    marginBottom: 16,
    borderRadius: 10,             // Rounded corners
    overflow: "hidden",           // Ensures borderRadius applies to children
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between", // Align overlays at top and bottom
  },
  overlayTop: {
    backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent overlay for better text readability
    padding: 4,
  },
  overlayBottom: {
    backgroundColor: "#333",      // Dark solid overlay at the bottom
    padding: 6,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  subtitle: {
    color: "lightgray",
    fontSize: 12,
  },
});

export default PlaylistGrid;
