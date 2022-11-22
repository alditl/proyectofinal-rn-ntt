import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import TrendingMovies from "./TrendingMovies";
import DiscoverMovies from "./DiscoverMovies";
import Styles from "../Styles";

const Home = (props) => {
  return (
    <View style={[Styles.container, Styles.sectionBg]}>
      <DiscoverMovies />
      <TrendingMovies
        title="Trending Movies"
        url="/movie/top_rated"
        navigation={props.navigation}
      />
    </View>
  );
};

export default Home;


