import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import UserContext from "../userContext";
import { styles } from "../styles/styles";
import { useGet } from "./hooks/useGet"


const Home = () => {
  const [data, isLoading, error] = useGet('tt0120338')


  return (
    <View style={styles.container}>
      {data && !isLoading && (
        <Text>

          {data.Title}
        </Text>
      )
      }
    </View>
  );
};

export default Home;