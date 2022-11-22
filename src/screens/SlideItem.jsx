import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SlideItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item }} style={styles.image} resizeMode="contain" />
    </View>
  );
};

export default SlideItem;
const styles = StyleSheet.create({
  container: {
    height: 1095,
    width: 500,
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
