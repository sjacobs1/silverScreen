import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Result } from "../model/discoverMovie";
import { formatDate } from "../utils/formatDate";
import { formatRating } from "../utils/formatRating";

interface MoviePosterProps {
  movie: Result;
}

const MoviePoster = ({ movie }: MoviePosterProps) => {
  return (
    <View style={styles.movieCard}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.posterInfoContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {movie.original_title}
        </Text>
        <View style={styles.secondInfoContainer}>
          <Text style={styles.star}>
            ★ <Text style={styles.rating}>{formatRating(movie.vote_average)}</Text>
          </Text>
          <Text style={styles.releaseDate}>
            {formatDate(movie.release_date)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  movieCard: {
    height: 270,
    width: 140,
    backgroundColor: "#21252B",
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  },
  poster: {
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  title: {
    color: "white",
    fontWeight: "light",
  },
  posterInfoContainer: {
    height: 70,
    justifyContent: "space-between",
    padding: 7,
  },
  secondInfoContainer: {
    flexDirection: "row",
    bottom: 0,
    justifyContent: "space-between",
  },
  releaseDate: {
    color: "white",
    fontWeight: "light",
    fontSize: 12,
  },
  rating: {
    color: "white",
    fontWeight: "light",
    fontSize: 12,
  },
  star: {
    fontSize: 10,
    color: "gold",
  },
});
