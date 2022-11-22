import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState, useEffect } from "react";
import { IMAGE_POSTER_URL } from "../Config";
import { GET } from "../Services/API";
import Styles from "../Styles";
import Icon from "react-native-vector-icons/Entypo";
import TrendingMovies from "./TrendingMovies";
import Loader from "./Loader";

const MovieDetail = (props) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await GET(`/movie/${props.route.params.movieId}`);
        setDetails(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getDetails();
  }, [props]);

  const getGenre = () => {
    console.log(details.genres, "genre");
    return details.genres.map((genre) => (
      <View key={genre.id} style={Styles.genreContainer}>
        <Text key={genre.id} style={Styles.genre}>
          {genre.name}
        </Text>
      </View>
    ));
  };
  return (
    <ScrollView style={Styles.sectionBg}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={Styles.DetailsMovieTitle}>{details.original_title}</Text>
          <View>
            <Image
              source={{ uri: `${IMAGE_POSTER_URL}${details.backdrop_path}` }}
              style={Styles.imageBg}
            />
          </View>
          {details.homepage ? (
            <View style={Styles.linkContainer}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(details.homepage);
                }}
              >
                <Icon name="link" color={"#fff"} size={22} />
              </TouchableOpacity>
            </View>
          ) : null}
          <Text style={Styles.heading}>OVERVIEW</Text>
          <Text style={Styles.overview}>{details.overview}</Text>
          <View style={Styles.detailsContainer}>
            <View>
              <Text style={Styles.heading}>BUDGET</Text>
              <Text style={Styles.details}>${details.budget}</Text>
            </View>
            <View>
              <Text style={Styles.heading}>DURATION</Text>
              <Text style={Styles.details}>{details.runtime}min.</Text>
            </View>
            <View>
              <Text style={Styles.heading}>RELEASE DATE</Text>
              <Text style={Styles.details}>{details.release_date}</Text>
            </View>
          </View>
          <Text style={Styles.heading}>GENRE</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            {getGenre()}
          </View>

          <TrendingMovies
            title="SIMILAR MOVIES"
            navigation={props.navigation}
            url={`/movie/${props.route.params.movieId}/similar`}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default MovieDetail;
