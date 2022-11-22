import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { GET } from "../Services/API";
import Loader from "./Loader";
import { POSTER_IMAGE } from "../Config";
import Styles from "../Styles";

const TrendingMovies = (props) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await GET(props.url);
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={Styles.heading}>{props.title}</Text>
          <FlatList
            keyExtractor={(item) => item.id}
            data={movies}
            horizontal
            renderItem={(item) => displayMovies(item, props)}
          />
        </View>
      )}
    </View>
  );
};

const displayMovies = ({ item }, props) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 10,
        alignContent: "center",
      }}
      onPress={() => {
        props.navigation.navigate("movieDetail", { movieId: item.id });
      }}
    >
      <Image
        source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
        style={Styles.posterImage}
      />
      <Text style={Styles.movieTitle}>{item.original_title}</Text>
    </TouchableOpacity>
  );
};

export default TrendingMovies;
