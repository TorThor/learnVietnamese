import { Text, View, StyleSheet } from "react-native"; // Add StyleSheet to the import
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { commonStyles } from "../styles/styles";
// index.tsx serves as the default homescreen, aka the root route within a directory
// Goal is to have Sounds bring you to the alphabet page but then also pop up the tab navigator for the other sound pages (double consonants, double vowels,
// markings, accents, etc.)

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Hello there</Text>
      <Link href="/alphabet" style={{ color: "green" }}>
        Go to Pronounciation
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
