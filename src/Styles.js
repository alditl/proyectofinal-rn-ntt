import { StyleSheet, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Styles = StyleSheet.create({
  posterImage: {
    height: 250,
    width: 150,
    borderRadius: 10,
  },
  movieTitle: {
    color: "#fff",
    width: 150,
    textAlign: "center",
    marginTop: 5,
    fontSize: 16,
  },
  heading: {
    fontSize: 19,
    color: "#969696",
    margin: 10,
  },
  genre: {
    color: "#fff",
    fontSize: 16,
  },
  imageBg: {
    width: deviceWidth,
    height: 250,
  },
  sectionBg: {
    backgroundColor: "#151C26",
    height: deviceHeight,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  DetailsMovieTitle: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
    marginTop: 40,
  },
  linkContainer: {
    backgroundColor: "midnightblue",
    borderRadius: 100,
    padding: 10,
    width: 45,
    marginLeft: 20,
    marginTop: -20,
    justifyContent: "center",
  },
  overview: {
    color: "#fff",
    marginHorizontal: 10,
    textAlign: "justify",
    fontSize: 16,
  },
  details: {
    color: "#fff",
    marginLeft: 15,
    fontSize: 15,
    fontWeight: "bold",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  genre: {
    color: "#fff",
  },
});

export default Styles;
