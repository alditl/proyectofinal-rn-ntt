import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Pagination = ({ data, index }) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        return (
          <View
            key={idx}
            style={[styles.dot, idx === index && styles.dotActive]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: "#fff",
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: "midnightblue",
  },
});
