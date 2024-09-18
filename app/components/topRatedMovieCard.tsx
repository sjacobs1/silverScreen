import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Result } from "../model/topRatedMovies";
import { formatRating } from "../utils/formatRating";
import { formatDate } from "../utils/formatDate";

interface TopRatedMovieProps {
  movie: Result;
}

// {movie}: TopRatedMovieProps

const TopRatedMovieCard = ({ movie }: TopRatedMovieProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.info}>
        <View style={styles.infoText}>
          <Text style={{ color: "white", fontSize: 15 }}>
            {movie.original_title}
          </Text>
          <Text style={styles.star}>
            ★ <Text style={styles.rating}>{formatRating(movie.vote_average)}</Text>
          </Text>
        </View>
        <View style={styles.infoButtons}>
        <Text style={{color: "white"}}>{`(${formatDate(movie.release_date)})`}</Text>
        </View>
      </View>
    </View>
  );
};

export default TopRatedMovieCard;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    backgroundColor: "#21252B",
    // width: "100%",
    height: 100,
    // paddingHorizontal: 5,
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    marginHorizontal: 10,
  },
  poster: {
    height: 90,
    width: 60,
    margin: 5,
  },
  info: {
    height: "100%",
    width: "80%",
    // backgroundColor: "green",
    marginLeft: 5,
    // padding: 5,
    paddingTop: 7,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoText: {
    // backgroundColor: "orange",
    gap: 5
    // justifyContent: "space-between",
  },
  infoButtons: {
    height: "100%",
    paddingRight: 10,
    // width: "100%",
    // backgroundColor: "blue"
  },
  rating: {
    color: "white",
    fontWeight: "light",
    // fontSize: 12,
  },
  star: {
    // fontSize: 10,
    color: "gold",
  },
});
