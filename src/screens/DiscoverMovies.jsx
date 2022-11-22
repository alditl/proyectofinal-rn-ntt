import React, { useEffect, useState, useRef } from "react";
import { View, Text, FlatList, Image, Animated } from "react-native";
import { GET } from "../Services/API";
import { IMAGE_POSTER_URL } from "../Config";
import SlideItem from "./SlideItem";
import Styles from "../Styles";
import Pagination from "./Pagination";

const DiscoverMovies = (props) => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      const response = await GET("/discover/movie");
      setMovies(response.results);

      const images = response.results.map(
        (data) => `${IMAGE_POSTER_URL}${data.backdrop_path}`
      );

      let backImages = [];
      for (let i = 0; i < 10; i++) {
        backImages = [...backImages, images[i]];
      }

      setImages(backImages);
    };

    getMovies();
  }, []);

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleOnViewableItemsChanged}
      />
      <Pagination data={images} index={index} />
    </View>
  );
};

export default DiscoverMovies;
